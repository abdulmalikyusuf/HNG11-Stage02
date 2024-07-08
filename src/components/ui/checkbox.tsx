// @ts-nocheck

"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const variants = cva(
  "flex items-center justify-center peer shrink-0 border border-black-900 ring-offset-black-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:text-black-400",
  {
    variants: {
      variant: {
        small: "size-[18px] p-1 [--indicator-size:2px]",
        medium: "size-6 p-[5px] [--indicator-size:3px]",
        large: "size-8 p-[7px] [--indicator-size:4px]",
      },
      roundness: {
        sharp: "rounded-none",
        rounded: "rounded-[4px]",
      },
    },
  }
);

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof variants> {}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ variant, roundness, className, ...props }, ref) => (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(variants({ variant, roundness }), className)}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn("size-full rounded-[var(--indicator-size)] bg-black-900")}
      />
    </CheckboxPrimitive.Root>
  )
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };

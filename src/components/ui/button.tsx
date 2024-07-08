import { forwardRef, type ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Icons, type Icon as IconType } from "@/components/icons";

const buttonVariants = cva(
  "w-fit inline-flex items-center justify-center whitespace-nowrap font-space-grotesk transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none",
  {
    variants: {
      fill: {
        solid: "bg-current",
        outline: "border-2 border-current !bg-transparent [--l-hover-gap:6px]",
      },
      size: {
        xLarge:
          "gap-2 px-14 py-5 hover:pt-[15px] hover:pb-[23px] button-xl [--icon-size:32px]",
        large:
          "gap-2 px-11 py-5 hover:gap-[var(--l-hover-gap)] hover:pt-[15px] hover:pb-[23px] button-lg [--icon-size:28px]",
        medium:
          "gap-1 px-[26px] py-2.5 hover:pt-2 hover:pb-3 button-md [--icon-size:24px]",
        small:
          "gap-1 px-6 py-2.5 hover:pt-[7px] hover:pb-[11px] button-sm [--icon-size:20px]",
        xSmall:
          "gap-0.5 px-5 py-2 hover:pt-1.5 hover:pb-2.5 button-xs [--icon-size:18px]",
      },
      colour: {
        light:
          "bg-black-900 text-white disabled:bg-black-100 disabled:text-black-300 disabled:border-black-200",
        dark: "bg-white text-black-900 disabled:bg-black-800 disabled:text-black-700",
      },
      roundness: {
        pill: "rounded-full",
        rounded: "rounded-md",
        sharp: "rounded-[0px]",
      },
    },
    defaultVariants: {
      fill: "solid",
      size: "medium",
      colour: "light",
      roundness: "pill",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  iconLeft?: keyof typeof Icons;
  iconRight?: keyof typeof Icons;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      size,
      colour,
      roundness,
      fill,
      asChild = false,
      iconLeft,
      iconRight,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const IconLeft = iconLeft && (Icons[iconLeft] as IconType);
    const IconRight = iconRight && (Icons[iconRight] as IconType);
    return (
      <Comp
        className={cn(
          buttonVariants({ fill, size, roundness, colour }),
          className
        )}
        ref={ref}
        {...props}
      >
        {IconLeft && <IconLeft className="size-[var(--icon-size)]" />}
        <span>{props.children}</span>
        {IconRight && <IconRight className="size-[var(--icon-size)]" />}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

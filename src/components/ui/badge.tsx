import { type HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Icons, type Icon as IconType } from "@/components/icons";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center uppercase transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      size: {
        large: "px-4 py-1 gap-1 fs-16 font-semibold [--icon-size:18px]",
        medium: "px-[14px] py-1 gap-1 fs-14 font-semibold [--icon-size:16px]",
        small: "px-2.5 py-0.5 gap-1 fs-12 font-semibold [--icon-size:14px]",
      },
      fill: {
        solid: "bg-current",
        outline: "!bg-transparent border border-[var(--primary-label)]",
      },
      colour: {
        light: "bg-primary text-white [--border:#fff]",
        dark: "bg-white text-primary [--border:var(--primary)]",
      },
      roundness: {
        pill: "rounded-full",
        rounded: "rounded-[4px]",
        sharp: "rounded-none",
      },
    },
    defaultVariants: {
      size: "large",
      fill: "solid",
      colour: "light",
      roundness: "pill",
    },
  }
);

export interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  iconPlacement?: "left" | "right" | "both" | "none";
  icon?: keyof typeof Icons;
}

function Badge({
  className,
  size,
  fill,
  colour,
  roundness,
  iconPlacement = "both",
  icon = "close",
  ...props
}: BadgeProps) {
  const Icon = Icons[icon] as IconType;
  return (
    <div
      className={cn(
        badgeVariants({ size, fill, colour, roundness }),
        className
      )}
      {...props}
    >
      {(iconPlacement === "left" || iconPlacement === "both") && (
        <Icon className="size-[var(--icon-size)]" />
      )}
      <span>{props.children}</span>
      {(iconPlacement === "right" || iconPlacement === "both") && (
        <Icon className="size-[var(--icon-size)]" />
      )}
    </div>
  );
}

export { Badge, badgeVariants };

const roundBadgeVariants = cva(
  "inline-flex items-center justify-center rounded-full uppercase transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      size: {
        large: "size-[65px] fs-16 font-semibold",
        medium: "size-[60px] fs-14 font-semibold",
        small: "size-[45px] fs-12 font-semibold",
      },
      fill: {
        solid: "bg-current",
        outline: "!bg-transparent border border-[var(--border)]",
      },
      colour: {
        light: "bg-black-900 text-white [--border:var(--white)]",
        dark: "bg-white text-black-900 [--border:var(--black-900)]",
      },
    },
    defaultVariants: {
      size: "large",
      fill: "solid",
      colour: "light",
    },
  }
);

export interface RoundBadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function RoundBadge({
  className,
  size,
  fill,
  colour,
  ...props
}: RoundBadgeProps) {
  return (
    <div
      className={cn(roundBadgeVariants({ size, fill, colour }), className)}
      {...props}
    />
  );
}

export { RoundBadge, roundBadgeVariants };

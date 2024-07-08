import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Icons, type Icon as IconType } from "@/components/icons";

const linkVariants = cva(
  "flex items-center justify-center w-fit hover:border-b font-space-grotesk transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none",
  {
    variants: {
      size: {
        xLarge:
          "gap-1 button-sm [--icon-size:20px] md:gap-2 md:button-xl md:[--icon-size:32px]",
        large: "gap-1.5 button-lg [--icon-size:28px]",
        medium: "gap-1 button-md [--icon-size:24px]",
        small: "gap-1 button-sm [--icon-size:20px]",
        xSmall: "gap-0.5 button-xs [--icon-size:18px]",
      },
      colour: {
        light: "text-black-900 hover:text-black-400 disabled:text-black-700",
        dark: "text-white hover:text-black-600 disabled:text-black-400 disabled:border-black-300",
      },
      decoration: {
        underline: "border-current border-b",
      },
    },
    defaultVariants: {
      colour: "light",
      size: "medium",
    },
  }
);

export interface LinkProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof linkVariants> {
  asChild?: boolean;
  iconPlacement?: "left" | "right" | "both";
  iconBefore?: keyof typeof Icons;
  icon?: keyof typeof Icons;
}

const Link = forwardRef<HTMLButtonElement, LinkProps>(
  (
    {
      size,
      colour,
      decoration,
      asChild = false,
      iconPlacement = "both",
      icon = "arrowRight",
      iconBefore,
      className,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const IconBefore = iconBefore && (Icons[iconBefore] as IconType);
    const IconAfter = icon && (Icons[icon] as IconType);
    return (
      <Comp
        className={cn(linkVariants({ size, colour, decoration }), className)}
        ref={ref}
        {...props}
      >
        {IconBefore && <IconBefore className="size-[var(--icon-size)]" />}
        <span>{props.children}</span>
        {IconAfter && <IconAfter className="size-[var(--icon-size)]" />}
      </Comp>
    );
  }
);
Link.displayName = "Link";
export { Link, linkVariants };

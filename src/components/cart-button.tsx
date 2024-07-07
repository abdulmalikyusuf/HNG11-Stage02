import { forwardRef, type ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";

export interface CartButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  numOfItems: number;
  asChild?: boolean;
}

const CartButton = forwardRef<HTMLButtonElement, CartButtonProps>(
  ({ numOfItems, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        {...props}
        type="button"
        className="inline-flex items-center gap-0.5 w-[50px] h-[26px] sm:h-7"
      >
        <Icons.cart className="size-[26px] sm:size-7 text-[var(--icon-colour)]" />
        <span
          className={cn(
            "inline-flex items-center justify-center size-5 rounded-full text-xs leading-[10px] font-inter font-bold",
            "bg-primary text-white [--icon-colour:var(--black-900)]"
          )}
        >
          {numOfItems}
        </span>
      </Comp>
    );
  }
);

CartButton.displayName = "CartButton";

export { CartButton };

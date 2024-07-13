import { type ButtonHTMLAttributes } from "react";
import { useQuery } from "@tanstack/react-query";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import db from "@/lib/db";
import { Link } from "react-router-dom";

export interface CartButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  numOfItems: number;
  asChild?: boolean;
}

function CartButton() {
  const { data } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => await db.cartItem.toArray(),
  });
  // const numOfItems = useLiveQuery(() => db.cartItem.toArray());

  return (
    <Link
      to="/cart"
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
        {data ? data.length : 0}
      </span>
    </Link>
  );
}

CartButton.displayName = "CartButton";

export { CartButton };

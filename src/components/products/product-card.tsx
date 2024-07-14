import { type HTMLAttributes, forwardRef } from "react";
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
import { type VariantProps, cva } from "class-variance-authority";
import { Link } from "react-router-dom";

import Rating from "@/components/products/rating";
import PlaceholderImage from "@/components/ui/placeholder-image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn, formatPrice } from "@/lib/utils";
import { Item as Product } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { postCart } from "@/queries/cart";
import { queryClient } from "@/App";

const AspectRatio = AspectRatioPrimitive.Root;

const variants = cva("flex flex-col gap-3", {
  variants: {
    variant: {
      left: "",
      center: "items-center",
    },
  },
  defaultVariants: { variant: "left" },
});

export interface ProductCardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof variants> {
  product: Product;
}

const ProductCard = forwardRef<HTMLDivElement, ProductCardProps>(
  ({ variant, className, product, ...props }, ref) => {
    const mutation = useMutation({
      mutationFn: postCart,
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries({ queryKey: ["cart"] });
      },
    });

    console.log(product);

    return (
      <div
        ref={ref}
        {...props}
        className={cn(variants({ variant }), className)}
      >
        <div className="relative group h[var(--img-height)]">
          <div className="hidden group-hover:flex flex-col-reverse justify-between group-hover:absolute group-hover:inset-4 z-40 transition duration-300 delay-100">
            <div className="flex justify-center">
              <Button
                size="small"
                roundness="sharp"
                iconRight="arrowRight"
                onClick={() =>
                  mutation.mutate({ quantity: 1, uniqueId: product.id })
                }
              >
                Add to cart
              </Button>
            </div>
          </div>
          <AspectRatio ratio={3 / 4}>
            {product?.photos?.length ? (
              <img
                src={
                  `${import.meta.env.VITE_BASE_URL}/images/${
                    product.photos.at(0).url
                  }` ?? "/images/placeholder.png"
                }
                alt={product.name}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover h-full w-full"
                loading="lazy"
              />
            ) : (
              <PlaceholderImage />
            )}
          </AspectRatio>
          <div className="absolute top-4 left-4">
            <div className="flex flex-col gap-2">
              {product.is_available && (
                <Badge
                  size="medium"
                  roundness="rounded"
                  iconPlacement="none"
                  className=""
                  fill="solid"
                  colour="dark"
                >
                  NEW
                </Badge>
              )}
              {/* {discount > 0 && (
                <Badge
                  size="medium"
                  roundness="rounded"
                  iconPlacement="none"
                  className="bg-teal-600 text-white"
                  fill="solid"
                  colour="light"
                >
                  -{(discount * 100).toFixed(0)}%
                </Badge>
              )} */}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <Rating size="sm" rating={5} />
            <Link
              to={`/products/${product.id}`}
              className="button-sm font-space-grotesk hover:underline focus-visible:underline"
            >
              {product.name}
            </Link>
            <p className="inline-flex gap-3 fs-14">
              <span className="font-semibold">
                {/* &#8358; */}
                {product.current_price &&
                  formatPrice(product.current_price.at(0).NGN.at(0), "NGN")}
              </span>
              {product.discounted_price && (
                <span className="line-through text-black-400">
                  {product.current_price.at(0).NGN.at(0)}
                </span>
              )}
            </p>
          </div>
        </div>
      </div>
    );
  }
);

ProductCard.displayName = "ProductCard Title";

export { ProductCard };

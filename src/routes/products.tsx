import { Suspense } from "react";

import { ProductCard } from "@/components/products/product-card";
import { Icons } from "@/components/icons";
import { Link } from "@/components/ui/link";
import { cn } from "@/lib/utils";
import Filter from "@/components/products/filter";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/queries/product";

function ProductsPage() {
  const { isPending, data } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isPending) return <p className="">Is Loading</p>;

  return (
    <>
      <div className="p-4 md:p-13">
        <div className="h-[282px] md:h-[400px] bg-[url(assets/img/unsplash_Kh4tedFdHz4.png)] bg-cover bg-bottom bg-no-repeat flex justify-center items-center gap-2 text-center">
          <div className="flex flex-col gap-2 max-w-xs md:max-w-xl">
            <div className="flex flex-col gap-3">
              <h3 className="heading-5 md:heading-3">Shop</h3>
              <p className="text-text-blue fs-12 md:fs-18">
                Discover comfort and style with our luxurious, modern sofa
                collection
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-13 flex gap-8">
        <div className="hidden md:block relative">
          <div className="sticky top-0">
            <Filter />
          </div>
        </div>
        <div className="flex-1">
          <div className="py-4 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <p className="fs-16 text-black-600">134 products</p>
              <div className="flex gap-8">
                <Link
                  size="small"
                  colour="light"
                  iconPlacement="right"
                  icon="filter"
                  className="md:hidden"
                >
                  Filter
                </Link>
                <Link
                  size="small"
                  colour="light"
                  iconPlacement="right"
                  icon="chevron-down"
                >
                  Sort by
                </Link>
                <div className="flex h-10 border border-black-200 divide-x divide-black-200">
                  <button
                    type="button"
                    className="w-[46px] inline-flex justify-center items-center bg-black-100"
                  >
                    <Icons.tally5 className="size-6" />
                  </button>
                  <button
                    type="button"
                    className="w-[46px] inline-flex justify-center items-center"
                  >
                    <Icons.tally4 className="size-6 text-black-400" />
                  </button>
                  <button
                    type="button"
                    className="w-[46px] inline-flex justify-center items-center"
                  >
                    <Icons.tally3 className="size-6 text-black-400" />
                  </button>
                  <button
                    type="button"
                    className="w-[46px] inline-flex justify-center items-center"
                  >
                    <Icons.tally2 className="size-6 text-black-400" />
                  </button>
                  <button
                    type="button"
                    className="w-[46px] inline-flex justify-center items-center"
                  >
                    <Icons.equal className="size-6 text-black-400" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Suspense fallback={<p>Loading...</p>}>
            <div className="">
              <div
                className={cn(
                  "product-grid justify-items-center justify-center gap-y-8 gap-x-4 md:gap-y-14 md:gap-x-[27px]",
                  "[--width:228px]"
                )}
              >
                {data.items &&
                  data.items.map((product) => (
                    <ProductCard
                      key={product.name}
                      variant="left"
                      product={product}
                      className="mobile-cols-2 md:shop-cols-3"
                    />
                  ))}
              </div>
              <div className="flex justify-center items-center mt-20">
                {/* TODO: On mobile the button variant should xSmall */}
                <button
                  type="button"
                  className="rounded-md inline-flex justify-center items-center size-10 text-sm font-medium border border-primary"
                >
                  1
                </button>
              </div>
            </div>
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;

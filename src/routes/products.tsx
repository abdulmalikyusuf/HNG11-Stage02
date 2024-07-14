import { Suspense, useEffect, useState } from "react";

import { ProductCard } from "@/components/products/product-card";
import { Icons } from "@/components/icons";
import { Link } from "@/components/ui/link";
import { arrayRange, cn } from "@/lib/utils";
import Filter from "@/components/products/filter";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getProducts } from "@/queries/product";
import { queryClient } from "@/App";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import Loading from "@/components/loading";
import ErrorComponent from "@/components/error";
import { Sort } from "@/components/products/sort";
import ProductCountDisplay from "@/components/products/count-display";

function ProductsPage() {
  const [page, setPage] = useState(1);
  const [categoryId, setCategoryID] = useState<null | string>(null);
  const [reverseSort, setReverseSort] = useState(false);

  const { status, data, isPlaceholderData } = useQuery({
    queryKey: ["products", page, categoryId, reverseSort],
    queryFn: () =>
      getProducts({
        size: 10,
        page,
        category_id: categoryId,
        sorting_key: "name",
        reverse_sort: reverseSort,
      }),
    placeholderData: keepPreviousData,
  });

  // Prefetch the next page!
  useEffect(() => {
    if (!isPlaceholderData && data?.total > data?.size) {
      queryClient.prefetchQuery({
        queryKey: ["projects", page, categoryId, reverseSort],
        queryFn: () =>
          getProducts({
            size: 10,
            page,
            category_id: categoryId,
            sorting_key: "name",
            reverse_sort: reverseSort,
          }),
      });
    }
  }, [data, isPlaceholderData, page, categoryId]);

  if (status === "pending") return <Loading />;
  if (status === "error" || !data.items) return <ErrorComponent />;

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
            <Filter handleChange={setCategoryID} categoryId={categoryId} />
          </div>
        </div>
        <div className="flex-1">
          <div className="py-4 flex flex-col gap-3">
            <div className="flex flex-wrap items-center justify-between gap-y-4">
              <ProductCountDisplay
                page={page}
                size={data.size}
                total={data.total}
              />
              <div className="flex flex-wrap gap-y-2 gap-x-8">
                <Drawer>
                  <DrawerTrigger className="md:hidden" asChild>
                    <Link
                      size="small"
                      colour="light"
                      iconPlacement="right"
                      icon="filter"
                    >
                      Filter
                    </Link>
                  </DrawerTrigger>
                  <DrawerContent>
                    <Filter
                      handleChange={setCategoryID}
                      categoryId={categoryId}
                    />
                  </DrawerContent>
                </Drawer>
                <Sort
                  sortOrderReserve={reverseSort}
                  reverseSortOrder={setReverseSort}
                />
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
          <Suspense fallback={<Loading />}>
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
              <div className="flex justify-center gap-4 items-center mt-20">
                {data
                  ? arrayRange(1, Math.ceil(data.total / data.size), 1).map(
                      (num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => setPage(num)}
                          className={cn(
                            "rounded-md inline-flex justify-center items-center size-10 text-sm font-medium border border-primary-label hover:border-primary",
                            num === page &&
                              "text-primary font-semibold font-space-grotesk border-2 border-primary"
                          )}
                        >
                          {num}
                        </button>
                      )
                    )
                  : null}
              </div>
            </div>
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;

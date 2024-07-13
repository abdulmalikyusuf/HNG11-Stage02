import { getImageUrl, getProductCurrentPrice } from "@/lib/utils";
import { getProducts } from "@/queries/product";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

function NewArrival() {
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  return (
    <div className="">
      <h4 className="capitalize text-xl lg:text-32 lg:text-center text-primary font-medium">
        new arrivals
      </h4>
      <div className="mt-4 md:mt-6 lg:mt-[30px] -mr-4 md:-mr-10 lg:13 xl:-mr-20 2xl:-mr-24">
        <div className="flex gap-5 overflow-x-scroll no-scrollbar">
          {products &&
            products.items.slice(0, 6).map((product) => (
              <div
                key={product.name}
                className="shrink-0 min-w-[255px] w-80 py-10px-2.5 flex flex-col gap-[30px]"
              >
                <div className="flex min-h-[294px] items-center bg-miscellaneous">
                  <img
                    src={
                      product.photos.length
                        ? getImageUrl(product.photos.at(0))
                        : "images/placeholder-image.jpg"
                    }
                    alt={`${product.name} image`}
                    className=""
                  />
                </div>
                <div className="flex flex-col gap-1.5 text-primary-label font-medium">
                  <Link
                    to={`/products/${product.unique_id}`}
                    className="font-semibold hover:underline"
                  >
                    {product.name}
                  </Link>
                  <small className="text-xs">
                    {product && getProductCurrentPrice(product.current_price)}
                  </small>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default NewArrival;

import { getImageUrl } from "@/lib/utils";
import { getProducts } from "@/queries/product";
import { useQuery } from "@tanstack/react-query";

function PerchChairs() {
  const { data: products, status } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts({ size: 6, page: 2 }),
  });
  if (status === "pending") return <p className="">Loading...</p>;
  return (
    <div className="mt-5 lg:mt-[30px] flex gap-5 md:gap-6 lg:gap-10 overflow-scroll no-scrollbar">
      {products.items.map((product, i) => (
        <div key={`product-image-${i}`} className="shrink-0">
          <img
            src={
              product?.photos?.length
                ? getImageUrl(product.photos.at(0))
                : "/images/placeholder.png"
            }
            alt=""
            className="w-[266px] h-[182px] md:w-[347px] md:h-[238px]"
          />
        </div>
      ))}
    </div>
  );
}

export default PerchChairs;

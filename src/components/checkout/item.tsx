import { Icons } from "@/components/icons";
import { useQuery } from "@tanstack/react-query";

import { getProduct } from "@/queries/product";
import { formatPrice, getImageUrl } from "@/lib/utils";

function CartItem({ id, quan }: { id: string; quan: number }) {
  const { data, status } = useQuery({
    queryKey: [id],
    queryFn: () => getProduct(id),
  });

  if (status === "pending")
    return <p className="font-space-grotesk">Loading Checkout Item...</p>;
  if (!data) return null;

  return (
    <div className="py-4 border-b border-primary flex gap-4">
      <div className="w-[77px] h-[102px]">
        <img
          src={
            data?.photos?.length
              ? getImageUrl(data.photos.at(0))
              : "/images/placeholder.png"
          }
          alt={data.description}
          className=""
        />
      </div>
      <div className="flex items-end md:items-start justify-between md:gap-4">
        <div className="flex-1 flex flex-col gap-2">
          <p className="fs-14 font-semibold">
            {data.name} <span className="font-space-grotesk">x</span>
            {quan}
          </p>
          <p className="fs-12 text-black-600">Color: Brown</p>
          <button type="button" className="inline-flex items-center">
            <Icons.trashCan className="size-5 text-black-600" />
            <span className="text-base font-medium capitalize">remove</span>
          </button>
        </div>
        <div className="flex md:flex-col items-center md:items-end gap-2">
          <p className="fs-14 font-semibold">
            {data.current_price &&
              formatPrice((data.current_price as unknown as number) * quan)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartItem;

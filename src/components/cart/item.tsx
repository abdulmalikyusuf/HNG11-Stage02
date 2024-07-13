import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Icons } from "@/components/icons";
import { useQuery } from "@tanstack/react-query";

import { Link } from "@/components/ui/link";
import { getProduct } from "@/queries/product";
import { getImageUrl, getProductCurrentPrice } from "@/lib/utils";

function CartItem({
  id,
  quan,
  addCost,
}: {
  id: string;
  quan: number;
  addCost: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [quantity, setQuantity] = useState(quan);

  const changeQuantity = (amount: 1 | -1) => {
    if (amount === 1) {
      setQuantity((prev) =>
        prev >= data.available_quantity ? data.available_quantity : prev + 1
      );
    } else {
      setQuantity((prev) => (prev <= 1 ? 1 : prev - 1));
    }
  };
  const { data } = useQuery({
    queryKey: [id],
    queryFn: () => getProduct(id),
  });
  useEffect(() => {
    addCost((prev) =>
      data ? (prev += data.current_price.at(0).NGN.at(0)) : 0
    );
  }, []);

  if (!data) return null;

  return (
    <div className="py-6 col-span-full grid grid-cols-subgrid items-center border-b border-primary">
      <div className="col-span-5 flex items-center gap-4">
        <div className="w-[77px] h-[102px]">
          <img
            src={
              data.photos.length
                ? getImageUrl(data.photos.at(0))
                : "/images/placeholder.png"
            }
            alt=""
            className=""
          />
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <RouterLink to={`/products/${id}`} className="fs-14 font-semibold">
            {data.name}
          </RouterLink>
          <p className="fs-12 text-black-600">Color: Brown</p>
          <Link
            size="xSmall"
            colour="light"
            icon="close"
            iconBefore="trashCan"
            className="[&_span]:text-black-600 first:text-black-600"
          >
            Remove
          </Link>
        </div>
      </div>
      <div className="col-span-3 justify-self-center">
        <div className="py-1.5 px-2 w-fit flex items-center gap-[13px] border border-primary rounded-[4px]">
          <button
            type="button"
            className="flex items-center justify-center"
            onClick={() => changeQuantity(-1)}
          >
            <Icons.minus className="stroke-[1.25px] size-4" />
          </button>
          <p className="fs-12 font-semibold">{quantity}</p>
          <button
            type="button"
            className="flex items-center justify-center"
            onClick={() => changeQuantity(1)}
          >
            <Icons.plus className="stroke-[1.25px] size-4" />
          </button>
        </div>
      </div>
      <div className="col-span-2 justify-self-center">
        <p className="fs-18">
          {data && getProductCurrentPrice(data.current_price)}
        </p>
      </div>
      <div className="col-span-2 justify-self-end">
        <p className="fs-18 font-semibold">
          {data && getProductCurrentPrice(data.current_price)}
        </p>
      </div>
    </div>
  );
}

export default CartItem;

import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { getCategories } from "@/queries/categories";
import Loading from "@/components/loading";
import { cn } from "@/lib/utils";

function Filter({
  handleChange,
  categoryId,
}: {
  handleChange: React.Dispatch<null | string>;
  categoryId: string;
}) {
  const { isPending, data } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  useEffect(
    () => data?.items && handleChange(data.items.at(0).id),
    [data, handleChange]
  );

  if (isPending) return <Loading />;
  return (
    <div className="px-4 py-6 md:p-6 w-[310px]">
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <p className="fs-22 font-semibold">Filter</p>
        </div>
        <div className="flex flex-col gap-[56px] md:gap-10">
          <div className="">
            <p className="fs-14 font-semibold text-primary">CATEGORIES</p>
            <ul className="mt-4 flex flex-col gap-3 fs-14 font-semibold text-black-500 w-fit">
              {data &&
                data.items.map((item) => (
                  <li
                    key={item.name}
                    className={cn(
                      "capitalize cursor-pointer hover:text-black-900 hover:underline",
                      item.id === categoryId && "text-black-900 underline"
                    )}
                    onClick={() => handleChange(item.id)}
                  >
                    {item.name}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;

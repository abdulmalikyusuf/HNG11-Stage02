import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import { getCategories } from "@/queries/categories";
import Loading from "@/components/loading";
import { cn } from "@/lib/utils";
import ErrorComponent from "@/components/error";

function Filter({
  handleChange,
  categoryId,
}: {
  handleChange: React.Dispatch<null | string>;
  categoryId: string;
}) {
  const [, setSearchParams] = useSearchParams();

  const { status, data } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  if (status === "pending") return <Loading />;
  if (status === "error" || !data) return <ErrorComponent />;

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
              <li
                className={cn(
                  "capitalize cursor-pointer hover:text-black-900 hover:underline",
                  categoryId === null && "text-black-900 underline"
                )}
                onClick={() => {
                  handleChange(null);
                  setSearchParams((prev) => {
                    prev.delete("category");
                    return prev;
                  });
                }}
              >
                All
              </li>
              {data?.items
                ? data.items.map((item) => (
                    <li
                      key={item.name}
                      className={cn(
                        "capitalize cursor-pointer hover:text-black-900 hover:underline",
                        item.id === categoryId && "text-black-900 underline"
                      )}
                      onClick={() => {
                        handleChange(item.id);
                        setSearchParams({ category: item.name });
                      }}
                    >
                      {item.name}
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;

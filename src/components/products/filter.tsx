import { getCategories } from "@/queries/categories";
import { useQuery } from "@tanstack/react-query";

function Filter() {
  const { isPending, data } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
  if (isPending) return <p className="">Loading Categories...</p>;
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
                    className="capitalize hover:text-black-900 hover:underline"
                  >
                    {item.name}
                  </li>
                ))}
            </ul>
          </div>
          <div className="">
            <p className="fs-14 font-semibold text-primary">COLOR</p>
            <ul className="mt-4 flex flex-col gap-3 fs-14 font-semibold text-black-500 w-fit">
              {[
                "modern",
                "streetwear",
                "colorful",
                "patchwork",
                "bohemian",
                "vintage",
              ].map((item) => (
                <li
                  key={item}
                  className="first:text-black-900 first:underline underline-offset-2"
                >
                  {item}
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

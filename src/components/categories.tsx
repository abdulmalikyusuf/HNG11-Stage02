import { Link } from "react-router-dom";

import Chair1 from "@/assets/img/vertical-shot-wooden-chair-white 1.png";
import Chair2 from "@/assets/img/83419490_Wingback Chair -4.png";
import Chair3 from "@/assets/img/7043761_861.png";

function Categories() {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-rows-2 items-stretch gap-6 lg:gap-x-5 lg:gap-y-6">
        <div className="lg:row-span-2">
          <div className="p-5 lg:p-[30px] bg-miscellaneous flex flex-col">
            <div className="flex-1 flex flex-col gap-3">
              <h5 className="text-xl lg:text-[28px] font-semibold">
                Scandinavian
              </h5>
              <Link
                to="/products"
                className="w-fit text-xs lg:text-base font-medium text-primary border-b border-primary inline-flex items-center gap-1"
              >
                Shop Now{" "}
                <span className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <mask
                      id="mask0_18_143"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="25"
                    >
                      <rect y="0.5" width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_18_143)">
                      <path
                        d="M13.8462 18.1538L12.7923 17.0693L16.6115 13.25H4.5V11.75H16.6115L12.7923 7.93075L13.8462 6.84625L19.5 12.5L13.8462 18.1538Z"
                        fill="#905125"
                      />
                    </g>
                  </svg>
                </span>
              </Link>
            </div>
            <div className="self-end -mt-20">
              <img src={Chair1} alt="" className="" />
            </div>
          </div>
        </div>
        <div className="p-5 lg:p-[30px] bg-miscellaneous flex items-end justify-between">
          <div className="flex-1 flex flex-col gap-2 lg:gap-3">
            <h5 className="text-xl lg:text-[28px] font-semibold">Tyley</h5>
            <Link
              to="/products"
              className="w-fit whitespace-nowrap text-xs lg:text-base font-medium text-primary border-b border-primary inline-flex items-center gap-1"
            >
              Shop Now{" "}
              <span className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <mask
                    id="mask0_18_143"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="25"
                  >
                    <rect y="0.5" width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_18_143)">
                    <path
                      d="M13.8462 18.1538L12.7923 17.0693L16.6115 13.25H4.5V11.75H16.6115L12.7923 7.93075L13.8462 6.84625L19.5 12.5L13.8462 18.1538Z"
                      fill="#905125"
                    />
                  </g>
                </svg>
              </span>
            </Link>
          </div>
          <img src={Chair2} alt="" className="shrink" />
        </div>
        <div className="p-5 lg:p-[30px] bg-miscellaneous flex items-end justify-between">
          <div className="flex-1 flex flex-col gap-2 lg:gap-3">
            <h5 className="text-xl lg:text-[28px] font-semibold">Denatti</h5>
            <Link
              to="/products"
              className="w-fit whitespace-nowrap text-xs lg:text-base font-medium text-primary border-b border-primary inline-flex items-center gap-1"
            >
              Shop Now{" "}
              <span className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <mask
                    id="mask0_18_143"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="25"
                  >
                    <rect y="0.5" width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_18_143)">
                    <path
                      d="M13.8462 18.1538L12.7923 17.0693L16.6115 13.25H4.5V11.75H16.6115L12.7923 7.93075L13.8462 6.84625L19.5 12.5L13.8462 18.1538Z"
                      fill="#905125"
                    />
                  </g>
                </svg>
              </span>
            </Link>
          </div>
          <img src={Chair3} alt="" className="" />
        </div>
      </div>
    </div>
  );
}

export default Categories;

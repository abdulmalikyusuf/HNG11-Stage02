import { Link } from "react-router-dom";

import ChairHero from "@/assets/img/83417461_Slipper -2 1.png";
import Chair1 from "@/assets/img/vertical-shot-wooden-chair-white 1.png";
import Chair2 from "@/assets/img/83419490_Wingback Chair -4.png";
import Chair3 from "@/assets/img/7043761_861.png";
import BannerImage from "@/assets/img/unsplash_348dJPXEFHk.png";
import MoreChairImage1 from "@/assets/img/unsplash_Kh4tedFdHz4.png";
import MoreChairImage2 from "@/assets/img/unsplash_L7EwHkq1B2s.png";
import MoreChairImage3 from "@/assets/img/unsplash_Gh_UjjYoVwk.png";
import NewArrival1 from "@/assets/img/new-arrivals/81678229_Luxury white and golden sofa -3 1.png";
import NewArrival2 from "@/assets/img/new-arrivals/Paste image.png";
import NewArrival3 from "@/assets/img/new-arrivals/unsplash_IjTqniVFP1Y.png";
import NewArrival4 from "@/assets/img/new-arrivals/unsplash_ItMggD0EguY.png";

const newArrivals = [
  { image: NewArrival1, name: "Tyley Chair", price: 200 },
  { image: NewArrival2, name: "Zefison Chair", price: 350 },
  { image: NewArrival3, name: "Italian Rococo", price: 700 },
  { image: NewArrival4, name: "King Sofa", price: 899 },
  { image: NewArrival4, name: "King Sofa", price: 899 },
];
function IndexPage() {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-24 bg-[#F5F5F5] p-2 lg:px-[100px] py-10 lg:py-13">
        <div className="flex flex-col gap-5 lg:gap-24">
          <div className="text-32 lg:text-6xl font-bold uppercase">
            <h2 className="text-black">Elevate Your</h2>
            <h2 className="text-primary">comfort</h2>
          </div>
          <div className="font-semibold text-sm lg:text-xl lg:leading-6 flex flex-col gap-[14px] lg:gap-6">
            <p className="">Want comfort and style? Perch is for you.</p>
            <Link
              to=""
              className="w-fit text-base font-medium text-primary border-b border-primary inline-flex items-center gap-1"
            >
              See collection{" "}
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
        </div>
        <div className="flex-1">
          <img src={ChairHero} alt="A chair from pearch website" className="" />
        </div>
      </div>
      <div className="px-4 md:px-10 lg:13 xl:px-20 2xl:px-24 flex flex-col gap-20 mb-28 overflow-clip">
        <div className="py-[88px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-rows-2 items-stretch gap-6 lg:gap-x-5 lg:gap-y-6">
            <div className="lg:row-span-2">
              <div className="p-5 lg:p-[30px] bg-miscellaneous flex flex-col">
                <div className="flex-1 flex flex-col gap-3">
                  <h5 className="text-xl lg:text-[28px] font-semibold">
                    Scandinavian
                  </h5>
                  <Link
                    to=""
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
                <h5 className="text-xl lg:text-[28px] font-semibold">
                  Chesterfield
                </h5>
                <Link
                  to=""
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
              <img src={Chair2} alt="" className="" />
            </div>
            <div className="p-5 lg:p-[30px] bg-miscellaneous flex items-end justify-between">
              <div className="flex-1 flex flex-col gap-2 lg:gap-3">
                <h5 className="text-xl lg:text-[28px] font-semibold">
                  Denatti
                </h5>
                <Link
                  to=""
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
              <img src={Chair3} alt="" className="" />
            </div>
          </div>
        </div>
        <div className="">
          <h4 className="capitalize text-xl lg:text-32 text-center text-primary font-medium">
            new arrivals
          </h4>
          <div className="mt-6 lg:mt-[30px] -mr-24">
            <div className="flex gap-5 ">
              {newArrivals.map((chair) => (
                <div
                  key={chair.name}
                  className="shrink-0 w-[255px] py-10 px-2.5 flex flex-col gap-[30px]"
                >
                  <div className="flex h-[294px] items-center bg-miscellaneous">
                    <img
                      src={chair.image}
                      alt={`${chair.name} image`}
                      className=""
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 text-primary-label font-medium">
                    <p className="">{chair.name}</p>
                    <small className="text-xs">${chair.price}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="p-6 lg:px-5 bg-miscellaneous max-lg:border-t border-primary">
          <div className="flex flex-col-reverse lg:flex-row lg:items-center gap-16">
            <div className="flex-1 text-primary-label">
              <h4 className="hidden lg:block text-32 font-bold">
                Unparalleled Comfort
              </h4>
              <p className="mt-4 lg:text-2xl font-medium">
                Experience the difference of luxurious cushioning and ergonomic
                design. Sink into the Perch and feel your stress melt away.
              </p>
              <Link
                to=""
                className="mt-6 lg:mt-[30px] w-fit text-xs lg:text-base font-medium text-primary border-b border-primary inline-flex items-center gap-1"
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
            <div className="flex-1">
              <img src={BannerImage} alt="" className="" />
            </div>
            <div className="mb-9 lg:hidden">
              <h4 className="text-2xl text-left font-bold text-primary-label">
                Unparalled Comfort
              </h4>
            </div>
          </div>
        </div>

        <div className="max-lg:py-6">
          <h4 className="py-1 lg:py-2 capitalize text-xl lg:text-32 lg:text-center text-primary font-medium">
            new arrivals
          </h4>
          <div className="mt-5 lg:mt-[30px] flex gap-5">
            {[MoreChairImage1, MoreChairImage2, MoreChairImage3].map(
              (img, i) => (
                <div key={`product-image-${i}`} className="shrink-0">
                  <img src={img} alt="" className="" />
                </div>
              )
            )}
          </div>
          <div className="mt-6 lg:mt-[30px]">
            <Link
              to=""
              className="w-fit text-xs lg:text-base font-medium text-primary border-b border-primary inline-flex items-center gap-1"
            >
              See More{" "}
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
        </div>
      </div>
    </>
  );
}

export default IndexPage;

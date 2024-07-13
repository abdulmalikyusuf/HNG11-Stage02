import { Link } from "react-router-dom";

import ChairHero from "@/assets/img/83417461_Slipper -2 1.png";
import BannerImage from "@/assets/img/unsplash_348dJPXEFHk.png";
import Categories from "@/components/categories";
import NewArrival from "@/components/new-arrival";
import PerchChairs from "@/components/perch-chairs";

function IndexPage() {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-24 bg-[#F5F5F5] px-4 md:px-10 lg:13 xl:px-20 2xl:px-24 py-10 lg:py-13">
        <div className="flex flex-col max-lg:items-center max-lg:text-center gap-5 lg:gap-24">
          <div className="text-32 lg:text-6xl font-bold uppercase">
            <h2 className="text-black">Elevate Your</h2>
            <h2 className="text-primary">comfort</h2>
          </div>
          <div className="font-semibold text-sm lg:text-xl lg:leading-6 flex flex-col  max-lg:items-center max-lg:text-center gap-[14px] lg:gap-6">
            <p className="">Want comfort and style? Perch is for you.</p>
            <Link
              to="/products"
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
          <img src={ChairHero} alt="A chair from Perch website" className="" />
        </div>
      </div>
      <div className="px-4 md:px-10 lg:13 xl:px-20 2xl:px-24 flex flex-col gap-20 my-28 overflow-clip">
        <Categories />
        <NewArrival />
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
                to="/products"
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
            Perch chairs
          </h4>
          <PerchChairs />
          <div className="mt-6 lg:mt-[30px]">
            <Link
              to="/products"
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

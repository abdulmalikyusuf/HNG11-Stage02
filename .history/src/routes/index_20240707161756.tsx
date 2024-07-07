import ChairHero from "@/assets/img/83417461_Slipper -2 1.png";
import Chair1 from "@/assets/img/vertical-shot-wooden-chair-white 1.png";
import Chair2 from "@/assets/img/83419490_Wingback Chair -4.png";
import Chair3 from "@/assets/img/7043761_861.png";
import { Link } from "react-router-dom";

function IndexPage() {
  return (
    <>
      <div className="flex items-center gap-24 bg-[#F5F5F5] px-[100px] py-13">
        <div className="flex flex-col gap-24">
          <div className="text-6xl font-bold">
            <h2 className="text-black">Elevate Your</h2>
            <h2 className="uppercase text-primary">comfort</h2>
          </div>
          <div className="font-semibold text-xl leading-6 flex flex-col gap-6">
            <p className="">Want comfort and style? Perch is for you.</p>
            <p className="text-primary">See collection</p>
          </div>
        </div>
        <div className="flex-1">
          <img src={ChairHero} alt="A chair from pearch website" className="" />
        </div>
      </div>
      <div className="py-[88px] px-24">
        <div className="grid grid-cols-2 grid-rows-2 gap-x-5 gap-y-6">
          <div className="row-span-2">
            <div className="p-[30px] bg-miscellaneous">
              <img src={Chair1} alt="" className="" />
            </div>
          </div>
          <div className="p-[30px] bg-miscellaneous">
            <div className="flex flex-col gap-3">
              <h5 className="text-[28px] font-semibold">Chesterfield</h5>
              <Link
                to=""
                className="text-primary underline underline-offset-2 inline-flex items-center gap-1"
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
          <div className="bg-miscellaneous"></div>
        </div>
      </div>
    </>
  );
}

export default IndexPage;

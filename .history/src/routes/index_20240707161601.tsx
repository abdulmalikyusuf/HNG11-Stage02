import ChairHero from "@/assets/img/83417461_Slipper -2 1.png";
import Chair1 from "@/assets/img/vertical-shot-wooden-chair-white 1.png";
import Chair2 from "@/assets/img/83419490_Wingback Chair -4.png";
import Chair3 from "@/assets/img/7043761_861.png";

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
            <div className="">
              <h5 className="text-[28px] font-semibold">Chesterfield</h5>
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

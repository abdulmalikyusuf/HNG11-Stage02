import ChairHero from "@/assets/img/83417461_Slipper -2 1.png";

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
            <div className="p-[30px] bg-miscellaneous"></div>
          </div>
          <div className="bg-miscellaneous"></div>
          <div className="bg-miscellaneous"></div>
        </div>
      </div>
    </>
  );
}

export default IndexPage;

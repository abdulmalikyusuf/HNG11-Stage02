import ChairHero from "@/assets/img/83417461_Slipper -2 1.png";

function IndexPage() {
  return (
    <div className="flex items-center bg-[#F5F5F5]">
      <div className="">
        <div className="">
          <h2 className="text-black">Elevate Your</h2>
          <h2 className="uppercase text-primary">comfort</h2>
        </div>
        <div className="font-semibold text-xl leading-6 flex flex-col gap-6">
          <p className="">Want comfort and style? Perch is for you.</p>
          <p className="text-primary">See collection</p>
        </div>
      </div>
      <div className="">
        <img src={ChairHero} alt="A chair from pearch website" className="" />
      </div>
    </div>
  );
}

export default IndexPage;

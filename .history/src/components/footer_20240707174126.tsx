import React from "react";
import { Icons } from "./icons";

function Footer() {
  return (
    <footer className="pt-7 pb-4 lg:py-[30px] px-4 lg:px-24 bg-miscellaneous h[80vh] flex flex-col justify-between gap-16">
      <div className="flex flex-col items-center gap-[30px] py-2 lg:py-20 max-lg:px-2 border border-primary border-dashed">
        <div className="text-center text-primary-label">
          <h3 className="text-2xl lg:text-4xl font-bold">
            Join Our Newsletter
          </h3>
          <p className="mt-2 lg:mt-3 text-[10px] lg:text-base">
            Big discount and latest news in your inbox
          </p>
        </div>
        <div className="flex gap-5">
          <div className="flex rounded-md w-full lg:w-96 border border-primary items-center gap-2 px-1 py-1.5 lg:p-2.5">
            <Icons.mail className="size-[18px] lg:size-[22px] stroke-[0.5] lg:stroke-1 stroke-primary opacity-60" />
            <input
              type="email"
              name=""
              id=""
              placeholder="Email address"
              className="bg-transparent text-[rgba(18,_18,_18,_0.50)] text-xs lg:text-base font-medium placeholder:font-normal focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-primary rounded whitespace-nowrap px-2 lg:p-2.5 capitalize text-sm lg:text-base text-white"
          >
            sign up
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-10 lg:gap-4 lg:items-center">
        <h4 className="py-2 text-32 text-label-primary font-nico-moji">
          Perch
        </h4>
        <ul className="flex flex-col lg:flex-row gap-5 text-xl font-medium text-primary-label">
          <li className="">About Us</li>
          <li className="">Contact Us</li>
          <li className="">Privacy</li>
          <li className="">My Account</li>
        </ul>
      </div>
      <div className="py-2.5 -mx-4 md:-mx-10 lg:13 xl:-mx-20 2xl:-mx-24 border-t border-primary text-center">
        <p className="font-medium text-primary">© 2024 Perch Store</p>
      </div>
    </footer>
  );
}

export default Footer;

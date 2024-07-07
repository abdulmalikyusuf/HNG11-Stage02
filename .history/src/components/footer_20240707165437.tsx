import React from "react";
import { Icons } from "./icons";

function Footer() {
  return (
    <footer className="py-[30px] bg-miscellaneous px-24 h[80vh] flex flex-col justify-between gap-20">
      <div className="flex flex-col items-center gap-[30px] py-20 border-primary border-dashed">
        <div className="text-center text-primary-label">
          <h3 className="text-4xl font-bold">Join Our Newsletter</h3>
          <p className="mt-3">Big discount and latest news in your inbox</p>
        </div>
        <div className="flex gap-5">
          <div className="flex items-center gap-2 p-2.5">
            <Icons.mail className="size-[22px] stroke-primary" />
            <input
              type="email"
              name=""
              id=""
              className="text-[rgba(18,_18,_18,_0.50)] font-medium"
            />
          </div>
          <button
            type="submit"
            className="bg-primary rounded p-2.5 capitalize text-white"
          >
            sign up
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-12 items-center">
        <h4 className="py-2 text-32 text-label-primary font-nico-moji">
          Perch
        </h4>
        <ul className="flex text-xl font-medium text-primary-label">
          <li className="">About Us</li>
          <li className="">Contact Us</li>
          <li className="">Privacy</li>
          <li className="">My Account</li>
        </ul>
      </div>
      <div className="py-2.5 -mx-24 border-t border-primary text-center">
        <p className="font-medium text-primary">© 2024 Perch Store</p>
      </div>
    </footer>
  );
}

export default Footer;

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { CartButton } from "./cart-button";

function Header() {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <>
      <header
        className={cn(
          "h-[46px] md:h-[68px] relative flex items-center justify-between px-4 md:px-10 lg:13 xl:px-20 2xl:px-24",
          "bg-[#F5F5F5] border-transparent text-black-900 [--logo-fill:#121212]"
        )}
      >
        <div className="flex items-center justify-center gap-3 md:gap-6">
          <button
            type="button"
            className="md:hidden"
            onClick={() => setOpenSidebar(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-[24px] md:size-7"
              viewBox="0 0 24 20"
              fill="none"
            >
              <mask
                id="mask0_33_15873"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="20"
              >
                <rect width="24" height="20" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_33_15873)">
                <path
                  d="M3 15.8333V14.1025H5.077V15.8333H3ZM7.84625 15.8333V14.1025H21V15.8333H7.84625ZM3 10.8654V9.13457H5.077V10.8654H3ZM7.84625 10.8654V9.13457H21V10.8654H7.84625ZM3 5.89749V4.16666H5.077V5.89749H3ZM7.84625 5.89749V4.16666H21V5.89749H7.84625Z"
                  fill="#121212"
                />
              </g>
            </svg>
          </button>
          <Link to="/" className="py-2">
            <span className="uppercase text-2xl lg:text-[32px] leading-normal text-primary-label font-nico-moji">
              Perch
            </span>
          </Link>
        </div>
        <div
          className={cn(
            "flex justify-center",
            openSidebar
              ? "max-md:fixed inset-0 z-10 py-5 px-4 flex-col gap-12 justify-start w-4/5 bg-white"
              : "max-md:hidden"
          )}
        >
          <ul className="flex flex-col md:flex-row gap-6 md:gap-10">
            {openSidebar && (
              <div className="flex gap-3 items-center">
                <button
                  type="button"
                  className=""
                  onClick={() => setOpenSidebar(false)}
                >
                  <Icons.close className="size-5" />
                </button>
                <p className="text-2xl font-nico-moji text-primary-label">
                  Perch
                </p>
              </div>
            )}
            {[
              { title: "Home", href: "/" },
              { title: "Products", href: "/products" },
              { title: "Pages", href: "/pages" },
              { title: "About", href: "/about" },
            ].map((menu) => (
              <li key={menu.title}>
                <NavLink
                  to={menu.href}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center justify-center w-fit hover:border-b font-space-grotesk transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none",
                      "gap-0.5 button-xs",
                      "text-primary-label hover:text-primary disabled:text-black-700",
                      isActive && "text-primary border-b border-primary-label"
                    )
                  }
                >
                  {menu.title}{" "}
                  {menu.title === "Pages" || menu.title === "About" ? (
                    <Icons.chevronDown
                      className="size-[18px] relative top-[1px] transition-transform duration-200 ease-in group-data-[state=open]:-rotate-180"
                      aria-hidden
                    />
                  ) : null}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-2 items-center">
          <button type="button" className="hidden md:inline-flex size-7">
            <Icons.search className="" />
          </button>
          <Link to="/checkout" className="size-7">
            <Icons.user className="" />
          </Link>
          <CartButton />
        </div>
      </header>
      <div className="mx-4 mt-2.5 mb-6 md:hidden">
        <div className="flex items-center gap-2 py-2 px-3 rounded-full border-[0.5px] border-primary-label">
          <Icons.search className="size-4" />
          <input
            type="text"
            name=""
            id=""
            placeholder="Search your favorite perch"
            className="text-sm text-[rgba(18,_18,_18,_0.50)] w-full focus:outline-none"
          />
        </div>
      </div>
    </>
  );
}

export default Header;

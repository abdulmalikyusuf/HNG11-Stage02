import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Link } from "react-router-dom";
import { CartButton } from "./cart-button";

function Header() {
  return (
    <>
      <header
        className={cn(
          "h-[46px] md:h-[68px] relative flex items-center justify-between px-4 md:px-10 lg:13 xl:px-20 2xl:px-24",
          "bg-[#F5F5F5] border-transparent text-black-900 [--logo-fill:#121212]"
        )}
      >
        <div className="flex items-center justify-center gap-3 md:gap-6">
          <button type="button" className="md:hidden">
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
            <span className="text-2xl lg:text-[32px] leading-normal text-primary-label font-nico-moji capitalize">
              pearch
            </span>
          </Link>
        </div>
        <div className="hidden md:flex justify-center">
          <ul className="flex gap-10">
            {["Home", "Shop", "Products", "Pages"].map((menu) => (
              <li key={menu}>
                <span
                  className={cn(
                    "flex items-center justify-center w-fit hover:border-b font-space-grotesk transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none",
                    "gap-0.5 button-xs",
                    "text-black-900 hover:text-black-400 disabled:text-black-700"
                  )}
                >
                  {menu}{" "}
                  <Icons.chevronDown
                    className="size-[18px] relative top-[1px] transition-transform duration-200 ease-in group-data-[state=open]:-rotate-180"
                    aria-hidden
                  />
                </span>
              </li>
            ))}

            {/* <NavigationMenu.Link
                  className={cn(
                    "hover:border-b font-space-grotesk transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none",
                    "gap-0.5 button-xs",
                    "text-black-900 hover:text-black-400 disabled:text-black-700"
                  )}
                  href="https://github.com/radix-ui"
                >
                  {menu.title}{" "}
                </NavigationMenu.Link> */}
          </ul>
        </div>
        <div className="flex gap-5 items-center">
          <button type="button" className="hidden md:inline-flex size-7">
            <Icons.search className="" />
          </button>
          <button className="size-7">
            <Icons.user className="" />
          </button>
          <CartButton numOfItems={2} />
        </div>
      </header>
      <div className="mx-4 mt-2.5 mb-6 md:hidden">
        <div className="flex items-center gap-2 py-1 px-1.5 rounded-full border-[0.5px] border-primary-label">
          <Icons.search className="size-5" />
          <input
            type="text"
            name=""
            id=""
            placeholder="Search your favorite perch"
            className="text-sm"
          />
        </div>
      </div>
    </>
  );
}

export default Header;

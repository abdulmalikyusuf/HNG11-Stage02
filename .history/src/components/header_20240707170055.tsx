import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Link } from "react-router-dom";
import { CartButton } from "./cart-button";

function Header() {
  return (
    <header
      className={cn(
        "h-[46px] md:h-[68px] relative flex items-center justify-between px-4 md:px-10 lg:13 xl:px-20 2xl:px-24",
        "bg-[#F5F5F5] border-transparent text-black-900 [--logo-fill:#121212]"
      )}
    >
      <div className="flex items-center justify-center gap-3 md:gap-6">
        <button type="button" className="md:hidden">
          <Icons.hamburgerMenu className="size-[26px] md:size-7" />
        </button>
        <Link to="/" className="py-2">
          <span className="text-[32px] leading-normal text-primary-label font-nico-moji capitalize">
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
        <button className="hidden md:inline-flex size-7">
          <Icons.user className="" />
        </button>
        <CartButton numOfItems={2} />
      </div>
    </header>
  );
}

export default Header;

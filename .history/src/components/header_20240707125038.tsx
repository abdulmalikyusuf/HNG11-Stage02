import React from "react";

function Header() {
  return (
    <header
      ref={ref}
      {...props}
      className={cn(navigationBarVariants({ mode }), className)}
    >
      <div className="flex items-center justify-center gap-3 md:gap-6">
        <FlyMenu />
        {/* <Logo /> */}
        <NextLink
          href="/"
          className="w-[114px] md:w-[156px] h-[22px] md:h-[30px]"
        >
          <Icons.nayakLogo />
        </NextLink>
      </div>
      <NavigationMenu.Root className="z-[1] hidden md:flex justify-center">
        <NavigationMenu.List className="flex gap-10">
          {menuItems.map((menu) => (
            <NavigationMenu.Item key={menu.title}>
              {menu.component ? (
                <>
                  <NavigationMenu.Trigger
                    className={cn(
                      "flex items-center justify-center w-fit hover:border-b font-space-grotesk transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none",
                      "gap-0.5 button-xs",
                      "text-black-900 hover:text-black-400 disabled:text-black-700"
                    )}
                  >
                    {menu.title}{" "}
                    <Icons.chevronDown
                      className="size-[18px] relative top-[1px] transition-transform duration-200 ease-in group-data-[state=open]:-rotate-180"
                      aria-hidden
                    />
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content className="bg-black-200 data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto">
                    {menu.component}
                  </NavigationMenu.Content>
                </>
              ) : (
                <NavigationMenu.Link
                  className={cn(
                    "hover:border-b font-space-grotesk transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none",
                    "gap-0.5 button-xs",
                    "text-black-900 hover:text-black-400 disabled:text-black-700"
                  )}
                  href="https://github.com/radix-ui"
                >
                  {menu.title}{" "}
                </NavigationMenu.Link>
              )}
            </NavigationMenu.Item>
          ))}
          <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex mt-2.5 h-2.5 items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
            <div className="relative top-[70%] h-2.5 w-2.5 rotate-[45deg] rounded-tl-[2px] bg-black-200" />
          </NavigationMenu.Indicator>
        </NavigationMenu.List>

        <div className="w-[1440px] perspective-[2000px] absolute top-full left0 flex justify-center">
          <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
        </div>
      </NavigationMenu.Root>
      <div className="flex gap-5 items-center">
        <Search />
        <button className="hidden md:inline-flex size-7">
          <Icons.user className="" />
        </button>
        <button type="button" className="size-7">
          <Icons.heart />
        </button>
        <FlyOutCart />
      </div>
    </header>
  );
}

export default Header;

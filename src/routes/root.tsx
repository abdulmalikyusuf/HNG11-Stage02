import { Outlet, ScrollRestoration } from "react-router-dom";

import Footer from "@/components/footer";
import Header from "@/components/header";

function RootLayout() {
  return (
    <div className="max-w-[1920px] w-full mx-auto">
      <ScrollRestoration
        getKey={(location) => {
          // default behavior
          return location.key;
        }}
      />
      <Header />
      <Outlet />
      <div className="flow-root">
        <Footer />
      </div>
    </div>
  );
}

export default RootLayout;

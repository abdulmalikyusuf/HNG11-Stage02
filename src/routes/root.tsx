import { Outlet } from "react-router-dom";

import Footer from "@/components/footer";
import Header from "@/components/header";

function RootLayout() {
  return (
    <div className="max-w-[1920px] w-full mx-auto">
      <Header />
      <Outlet />
      <div className="flow-root">
        <Footer />
      </div>
    </div>
  );
}

export default RootLayout;

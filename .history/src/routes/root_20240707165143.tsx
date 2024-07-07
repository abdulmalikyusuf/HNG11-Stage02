import { Outlet } from "react-router-dom";

import Footer from "@/components/footer";
import Header from "@/components/header";

function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <div className="flow-root">
        <Footer />
      </div>
    </>
  );
}

export default RootLayout;

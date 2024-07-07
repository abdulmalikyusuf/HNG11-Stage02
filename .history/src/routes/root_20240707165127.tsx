import Header from "@/components/header";
import { Outlet } from "react-router-dom";

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

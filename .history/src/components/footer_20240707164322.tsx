import React from "react";

function Footer() {
  return (
    <footer className="py-[30px] bg-miscellaneous px-24">
      <div className="flex flex-col gap-[30px] py-20 border-primary border-dashed">
        <div className="text-center text-primary-label">
          <h3 className="text-4xl font-bold">Join Our Newsletter</h3>
          <p className="mt-3">Big discount and latest news in your inbox</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

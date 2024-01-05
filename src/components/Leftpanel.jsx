import React from "react";
import SideNavs from "./SideNavs";

export default function Leftpanel({ active, setActive }) {
  return (
    <div>
      <div
        className={`w-1/5 p-5 lg:block h-screen sm:w-[300px] z-30 ${
          active ? "custom-nav-responsive" : "hidden"
        }`}
      >
        <div className="flex gap-2 pl-5">
          <div className="w-4 h-4 bg-green-300 rounded-full"></div>
          <div className="w-4 h-4 bg-green-300 rounded-full"></div>
        </div>
        <div
          className={`lg:block ${active ? "custom-nav-responsive" : "hidden"}`}
        >
          <SideNavs />
        </div>
      </div>
    </div>
  );
}

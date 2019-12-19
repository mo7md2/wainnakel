import React from "react";
import navLogoImage from "../images/navLogo.png";

export default function NavBar() {
  return (
    <nav
      className="flex flex-none absolute top-0 left-0 px-4 py-3 bg-primary-500 h-16 w-full"
      style={{ direction: "rtl" }}
    >
      <div className="sm:w-9/12 md:w-8/12 lg:w-1/2 mx-auto">
        <a className="flex px-3 items-center" href="/">
          <img className="w-auto h-full" src={navLogoImage} alt="logo" />
          <p className="text-white text-3xl mx-3">وين ناكل ؟</p>
        </a>
      </div>
    </nav>
  );
}

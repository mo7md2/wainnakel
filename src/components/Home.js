import React from "react";
import logoImage from "../images/logo.png";
import Spinner from "./Spinner";

const Home =({onClick,isLoading})=>{

    return (
      <div className="home  flex flex-1 flex-col items-center justify-center text-center max-w-full">
        <div className="flex flex-col items-center">
          <img className="" src={logoImage} alt="Logo" />
          <div className="text-primary-500 text-6xl ">وين ناكل ؟</div>
        </div>
        <button
          onClick={onClick}
          className="h-20 w-7/12 bg-primary-500 text-4xl hover:bg-primary-700 text-white py-2 px-4 mt-10 rounded-btn focus:outline-none"
        >
          {isLoading ? <Spinner /> : 'اقترح'}
        </button>
      </div>
    );
}

export default Home;

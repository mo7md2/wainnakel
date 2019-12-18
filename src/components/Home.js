import React, { Component } from "react";
import "./Home.css";
import backgroundImage from "../images/background.jpg";
import logoImage from "../images/logo.png";

class Home extends Component {
  render() {
    return (
      <div className="home ">
        <div
          className=" -z-10 fixed bg-cover w-full h-full "
          style={{
            background: `url(${backgroundImage})`,
            backgroundSize: "cover"
          }}
        />
        <div className="flex flex-1 flex-col items-center text-center justify-center sm:w-9/12 md:w-8/12 lg:w-1/2 h-full min-h-screen mx-auto bg-light-500">
          <div className="flex flex-col items-center">
            <img className="" src={logoImage} alt="Logo" />
            <div className="text-primary-500 text-6xl ">وين ناكل ؟</div>
          </div>
          <button
            onClick={this.props.onClick}
            className="h-20 w-7/12 bg-primary-500 text-4xl hover:bg-primary-700 text-white py-2 px-4 mt-10 rounded-btn focus:outline-none"
          >
            اقترح
          </button>
        </div>
      </div>
    );
  }
}

export default Home;

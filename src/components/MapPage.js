import React from "react";
import NavBar from "./NavBar";
import InfoCard from "./InfoCard";
import Map from "./Map";
import Spinner from "./Spinner";

const MapPage = ({ restaurant, isLoading, onClick }) => {
  return (
    <div className="flex flex-col w-full max-w-full">
      <NavBar />
      <div className="mt-16" />
      <InfoCard
        name={restaurant.name}
        link={restaurant.link}
        cat={restaurant.cat}
      />
      <Map
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        id={restaurant.id}
        lat={restaurant.lat}
        lon={restaurant.lon}
      />
      <div className="relative flex max-w-full">
        <div
          className=" absolute flex flex-col md:flex-row w-full  justify-around bottom-0 pb-10 px-10"
          style={{ maxWidth: "90%" }}
        >
          <a
            href={`http://maps.google.com/?q=${restaurant.lat},${restaurant.lon}`}
            target="_blank"
            rel="noopener noreferrer"
            className="h-12  bg-light-800 truncate  text-gray-600 text-xl hover:text-gray-900  py-2 px-2 mt-10 rounded-btn focus:outline-none"
            style={{ minWidth: "200px" ,maxWidth:"200px" }}
          >
            فتح في Google Maps
          </a>
          <button
            onClick={onClick}
            className="h-12 text-white truncate  bg-primary-500 text-xl hover:bg-primary-700  py-2 px-2 mt-10 rounded-btn focus:outline-none"
            style={{ minWidth: "200px",maxWidth:"200px"  }}
          >
            {isLoading ? <Spinner /> : "اقتراح اخر"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default MapPage;

import React from "react";
import maps_marker from "../images/maps_marker.png";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker
} from "react-google-maps";

const Map = ({ id, lat, lon }) => {
  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: parseFloat(lat), lng: parseFloat(lon) }}
      center={{
        lat: parseFloat(lat),
        lng: parseFloat(lon)
      }}
    >
      <Marker
        key={id}
        position={{
          lat: parseFloat(lat),
          lng: parseFloat(lon)
        }}
        icon={{
          url: maps_marker,
          scaledSize: new window.google.maps.Size(26, 39)
        }}
      />
    </GoogleMap>
  );
};
export default withScriptjs(withGoogleMap(Map));

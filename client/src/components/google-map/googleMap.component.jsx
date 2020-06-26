import React from "react";
import GoogleMapReact from "google-map-react";
import useSupercluster from "use-supercluster";
const key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const myMap = (props) => {
  return (
    <div className="h-full w-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={{ lat: 33.6846, lng: -117.8265 }}
        defaultZoom={10}
      ></GoogleMapReact>
    </div>
  );
};
export default myMap;

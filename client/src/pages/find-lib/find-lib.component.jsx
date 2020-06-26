import React from "react";
import GoogleMap from "../../components/google-map/googleMap.component";

const FindLib = (props) => {
  return (
    <div className="flex w-full h-screen border-solid border-4 border-gray-600">
      <div className="w-1/3">Find Library</div>
      <div className="w-2/3">
        <GoogleMap />
      </div>
    </div>
  );
};

export default FindLib;

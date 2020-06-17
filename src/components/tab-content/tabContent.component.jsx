import React from "react";

const tabContent = (props) => {
  return (
    <div>
      <h1 className="text-white text-center font-semibold text-3xl tracking-wide leading-tight mt-10 mb-6">
        {props.children}
      </h1>
      <img className="w-2/3 m-auto" src={props.img} alt="tabImg"></img>
      <div className="flex flex-wrap justify-center items-center">
        {props.logo
          ? props.logo.map((l) => {
              return (
                <div className="w-32 h-12 mr-10">
                  <img
                    src={l}
                    className="w-full h-full object-cover"
                    alt="logo"
                  />
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default tabContent;

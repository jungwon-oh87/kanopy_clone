import React from "react";
import tempImg from "../../assets/images/lp-tab-company/fire.png";
import TempSvg from "../../assets/images/lp-tab-company/ipad.svg";
// import { ReactSVG } from "react-svg";

const tabContent = (props) => {
  return (
    <div>
      <h1 className="text-white text-center font-semibold text-3xl tracking-wide leading-tight mt-10 mb-6">
        {props.children}
      </h1>
      <img className="w-2/3 m-auto" src={props.img}></img>
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-16 h-10 border-solid border-2 border-gray-600">
          <img
            src={TempSvg}
            className="w-full h-full object-cover"
            alt="logo"
          />
        </div>
        <div className="w-16 h-10 border-solid border-2 border-gray-600">
          <img
            src={TempSvg}
            className="w-full h-full object-cover"
            alt="logo"
          />
        </div>
        <div className="w-16 h-10 border-solid border-2 border-gray-600">
          <img
            src={TempSvg}
            className="w-full h-full object-cover"
            alt="logo"
          />
        </div>

        {
          // <div className="w-16 h-10 order-solid border-2 border-gray-600">
          //   {/* <SVG className="w-full h-full object-cover" src={l} /> */}
          //   <ReactSVG
          //     src={tempSvg}
          //     beforeInjection={(svg) => {
          //       svg.classList.add("w-full");
          //       svg.classList.add("h-full");
          //       svg.classList.add("object-cover");
          //       svg.setAttribute("style", "width: 100%");
          //       svg.setAttribute("style", "height: 100%");
          //       svg.setAttribute("style", "object-fit: cover");
          //     }}
          //   />
          // </div>
        }

        {
          // props.logo.map((l) => {
          //   console.log("checking L: ", l);
          //   return (
          //     <div className="w-16 h-10 order-solid border-2 border-gray-600">
          //       {/* <SVG className="w-full h-full object-cover" src={l} /> */}
          //       <ReactSVG
          //         src={l}
          //         beforeInjection={(svg) => {
          //           svg.classList.add("w-full");
          //           svg.classList.add("h-full");
          //           svg.classList.add("object-cover");
          //           svg.setAttribute("style", "width: 100%");
          //           svg.setAttribute("style", "height: 100%");
          //           svg.setAttribute("style", "object-fit: cover");
          //         }}
          //       />
          //     </div>
          //   );
          // })
        }
      </div>
    </div>
  );
};

export default tabContent;

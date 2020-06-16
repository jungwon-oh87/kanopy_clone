import React from "react";
import rokuImg from "../../assets/images/lp-tab-company/roku.png";
import chromecastImg from "../../assets/images/lp-tab-company/chromecast.png";
import fireImg from "../../assets/images/lp-tab-company/fire.png";

const tabContent = (props) => {
  return (
    <div>
      <h1 className="text-white text-center font-semibold text-3xl tracking-wide leading-tight mt-10 mb-6">
        {props.children}
      </h1>
      <img className="w-2/3 m-auto" src={props.img}></img>
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-32 h-12 mr-10">
          <img
            src={rokuImg}
            className="w-full h-full object-cover"
            alt="logo"
          />
        </div>
        <div className="w-32 h-12 mr-10">
          <img
            src={chromecastImg}
            className="w-full h-full object-cover"
            alt="logo"
          />
        </div>
        <div className="w-32 h-12">
          <img
            src={fireImg}
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

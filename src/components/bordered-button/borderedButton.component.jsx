import React from "react";

const BorderedButton = (props) => {
  return (
    <div className="border-solid border-4 border-white-600 text-white text-center font-semibold text-2xl pt-2 pb-2">
      {props.children}
    </div>
  );
};

export default BorderedButton;

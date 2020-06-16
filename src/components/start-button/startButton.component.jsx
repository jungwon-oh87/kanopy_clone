import React from "react";

const StartButton = (props) => {
  return (
    <button
      className={`text-white font-bold text-lg tracking-wider bg-myPrimary w-full pt-4 pb-4 pl-1 pr-1`}
    >
      {props.children.toUpperCase()}
    </button>
  );
};

export default StartButton;

import React from "react";

const openContent = (evt, contentName) => {
  // evt.preventDefault();
  let i, tabContents, tabButtons;

  tabContents = document.getElementsByClassName("tabContent");
  for (i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }

  tabButtons = document.getElementsByClassName("tabButton");
  for (i = 0; i < tabButtons.length; i++) {
    tabButtons[i].className = tabButtons[i].className.replace("active", "");
  }
  console.log("contentName checking: ", contentName);
  // document.getElementById(contentName).style.display = "flex";
  // evt.currentTarget.className += " active";
};

const Tab = () => {
  return (
    <div className="flex flex-col text-white">
      <div className="flex">
        <button
          className="tabButton flex-1 flex flex-col justify-center items-center outline-none border-solid border-4 border-gray-600"
          onClick={() => {
            openContent("tv");
          }}
        >
          <i class="fas fa-tv fa-2x"></i>
          <span>TV</span>
        </button>
        <button
          className="tabButton flex-1 flex flex-col justify-center items-center outline-none border-none"
          onClick={() => {
            openContent("phone");
          }}
        >
          <i class="fas fa-mobile-alt fa-2x"></i>
          <span>Phone, Tablet &amp; Mobile</span>
        </button>
        <button
          className="tabButton flex-1 flex flex-col justify-center items-center outline-none"
          onClick={() => {
            openContent("desktop");
          }}
        >
          <i class="fas fa-laptop fa-2x"></i>
          <span>Desktop &amp; Laptop</span>
        </button>
      </div>
      <div>
        <div
          className="tabContent hidden flex flex-col justify-center items-center border-solid border-4 border-gray-600"
          id="tv"
        >
          TV Content
        </div>
        <div
          className="tabContent hidden flex flex-col justify-center items-center"
          id="phone"
        >
          Phone, Tablet Content
        </div>
        <div
          className="tabContent hidden flex flex-col justify-center items-center"
          id="desktop"
        >
          Desktop Laptop Content
        </div>
      </div>
    </div>
  );
};

export default Tab;

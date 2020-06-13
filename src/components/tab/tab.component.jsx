import React from "react";

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openTab: 1,
    };
  }

  render() {
    return (
      <div className="flex flex-col text-white w-11/12 m-auto">
        <div className="flex">
          <button
            className={`tabButton flex-1 flex flex-col justify-center items-center ${
              this.state.openTab === 1 ? "text-white" : "text-gray-600"
            } hover:text-white focus:outline-none`}
            onClick={(e) => {
              e.preventDefault();
              this.setState({ openTab: 1 });
            }}
          >
            <i class="fas fa-tv fa-2x"></i>
            <span>TV</span>
          </button>
          <button
            className={`tabButton flex-1 flex flex-col justify-center items-center ${
              this.state.openTab === 2 ? "text-white" : "text-gray-600"
            } hover:text-white focus:outline-none`}
            onClick={(e) => {
              e.preventDefault();
              this.setState({ openTab: 2 });
            }}
          >
            <i class="fas fa-mobile-alt fa-2x"></i>
            <span>Phone, Tablet &amp; Mobile</span>
          </button>
          <button
            className={`tabButton flex-1 flex flex-col justify-center items-center ${
              this.state.openTab === 3 ? "text-white" : "text-gray-600"
            } hover:text-white focus:outline-none`}
            onClick={(e) => {
              e.preventDefault();
              this.setState({ openTab: 3 });
            }}
          >
            <i class="fas fa-laptop fa-2x"></i>
            <span>Desktop &amp; Laptop</span>
          </button>
        </div>
        <div>
          <div
            className={`${
              this.state.openTab === 1 ? "block" : "hidden"
            } tabContent flex flex-col justify-center items-center border-solid border-4 border-gray-600`}
            id="tv"
          >
            {/* {console.log("openTab: ", this.state.openTab)} */}
            TV Content
          </div>
          <div
            className={`${
              this.state.openTab === 2 ? "block" : "hidden"
            } tabContent flex flex-col justify-center items-center border-solid border-4 border-gray-600`}
            id="phone"
          >
            Phone, Tablet Content
          </div>
          <div
            className={`${
              this.state.openTab === 3 ? "block" : "hidden"
            } tabContent flex flex-col justify-center items-center border-solid border-4 border-gray-600`}
            id="desktop"
          >
            Desktop Laptop Content
          </div>
        </div>
      </div>
    );
  }
}

export default Tab;

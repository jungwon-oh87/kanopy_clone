import React from "react";
import TabContent from "../tab-content/tabContent.component";
import laptopImg from "../../assets/images/lp-tab/device-laptop.png";
import tvImg from "../../assets/images/lp-tab/device-tv.png";
import tabletImg from "../../assets/images/lp-tab/device-tablet-phone.png";
import rokuImg from "../../assets/images/lp-tab-company/roku.png";
import chromecastImg from "../../assets/images/lp-tab-company/chromecast.png";
import fireImg from "../../assets/images/lp-tab-company/fire.png";

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openTab: 1,
    };
  }
  tvCompanies = [rokuImg, chromecastImg, fireImg];
  tabletCompanies = [rokuImg, chromecastImg];

  render() {
    return (
      <div className="flex flex-col text-white w-11/12 m-auto">
        <div className="flex border-solid border-b border-gray-600">
          <button
            className={`tabButton flex-1 flex flex-col justify-center items-center ${
              this.state.openTab === 1 ? "text-white" : "text-gray-600"
            } hover:text-white focus:outline-none`}
            onClick={(e) => {
              e.preventDefault();
              this.setState({ openTab: 1 });
            }}
          >
            <i class="fas fa-tv fa-3x"></i>
            <span
              className={`w-full border-solid border-b-4 ${
                this.state.openTab === 1
                  ? "border-myPrimary"
                  : "border-transparent"
              }`}
            >
              TV
            </span>
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
            <i class="fas fa-mobile-alt fa-3x"></i>
            <span
              className={`w-full border-solid border-b-4 ${
                this.state.openTab === 2
                  ? "border-myPrimary"
                  : "border-transparent"
              }`}
            >
              Phone, Tablet &amp; Mobile
            </span>
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
            <i class="fas fa-laptop fa-3x"></i>
            <span
              className={`w-full border-solid border-b-4 ${
                this.state.openTab === 3
                  ? "border-myPrimary"
                  : "border-transparent"
              }`}
            >
              Desktop &amp; Laptop
            </span>
          </button>
        </div>
        <div>
          <div
            className={`${
              this.state.openTab === 1 ? "block" : "hidden"
            } tabContent flex flex-col justify-center items-center`}
            id="tv"
          >
            <TabContent img={tvImg} logo={this.tvCompanies}>
              Enjoy on your TV
            </TabContent>
          </div>
          <div
            className={`${
              this.state.openTab === 2 ? "block" : "hidden"
            } tabContent flex flex-col justify-center items-center`}
            id="phone"
          >
            <TabContent img={tabletImg} logo={this.tabletCompanies}>
              Watch Kanopy on the go
            </TabContent>
          </div>
          <div
            className={`${
              this.state.openTab === 3 ? "block" : "hidden"
            } tabContent flex flex-col justify-center items-center`}
            id="desktop"
          >
            <TabContent img={laptopImg}>
              Stream Kanopy to your laptop or computer
            </TabContent>
          </div>
        </div>
      </div>
    );
  }
}

export default Tab;

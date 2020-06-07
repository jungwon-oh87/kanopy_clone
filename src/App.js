import React from "react";
import StartButton from "./components/start-button/startButton.component";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import book_img from "./assets/images/lp/book.jpg";
import captain_img from "./assets/images/lp/captain.jpg";
import colette_img from "./assets/images/lp/colette.jpg";
import eco_img from "./assets/images/lp/eco.jpg";
import florida_img from "./assets/images/lp/florida.jpg";
import call_img from "./assets/images/lp/call.jpg";

class App extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      arrows: false,
      fade: true,
      draggable: false,
    };

    return (
      <div className="grid grid-cols-1">
        <section className="bg-black relative">
          {/* <button>Log in</button> */}
          <Slider {...settings} className="w-full z-0">
            <div className="w-full h-screen">
              <img
                className="w-full h-full object-cover"
                alt="film_img"
                src={book_img}
              />
            </div>
            <div className="w-full h-screen">
              <img
                className="w-full h-full object-cover"
                alt="film_img"
                src={captain_img}
              />
            </div>
            <div className="w-full h-screen">
              <img
                className="w-full h-full object-cover"
                alt="film_img"
                src={colette_img}
              />
            </div>
            <div className="w-full h-screen">
              <img
                className="w-full h-full object-cover"
                alt="film_img"
                src={eco_img}
              />
            </div>
            <div className="w-full h-screen">
              <img
                className="w-full h-full object-cover"
                alt="film_img"
                src={florida_img}
              />
            </div>
          </Slider>
          <div className="absolute w-1/3 left-0 top-0 flex flex-col ml-6 z-1">
            <h1 className="text-white font-serif font-normal text-5xl tracking-wide mt-8">
              kan<span className="text-primary">oh</span>py
            </h1>
            <h1 className="text-white font-bold text-5xl tracking-wider mt-20 mb-5 leading-tight">
              Enjoy Thoughtful Entertainment
            </h1>
            <p className="text-white font-semibold text-xl tracking-wider mb-5 ">
              Stream thousands of films for free, thanks to the generous support
              of your public library or university
            </p>
            <StartButton width="w-1/2">Get Started</StartButton>
            <p className="text-white text-sm font-thin w-2/3 mt-10 text-gray-300">
              Available in participating public libraries, colleges and
              universities.
            </p>
          </div>
          {/* <div className="content">
          
        </div> */}
        </section>
        <section className="bg-black relative">
          {/* <button>Log in</button> */}
          <div className="w-full z-0">
            <img className="w-full" alt="film_img" src={call_img} />
          </div>
          <div className="absolute w-1/3 right-0 top-0 flex flex-col mr-6 z-1">
            <h1 className="text-white font-semibold text-2xl tracking-wider mt-20 mb-10 leading-tight">
              Start streaming movies today with your public library card or
              university login
            </h1>
            <p className="text-white font-thin text-xl tracking-wider mb-10 ">
              We partner with public libraries and universities to bring you
              ad-free films and series that can be enjoyed on your TV, mobile
              phone, tablet and online.
            </p>
            <StartButton width="w-1/2">Get Started</StartButton>
          </div>
        </section>
      </div>
    );
  }
}

export default App;

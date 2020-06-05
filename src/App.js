import React from "react";
import logo from "./assets/images/logo.png";
import StartButton from "./components/start-button/startButton.component";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import book_img from "./assets/images/lp/book.jpg";
import captain_img from "./assets/images/lp/captain.jpg";
import colette_img from "./assets/images/lp/colette.jpg";
import eco_img from "./assets/images/lp/eco.jpg";
import florida_img from "./assets/images/lp/florida.jpg";

class App extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      arrows: false,
      fade: true,
    };

    return (
      <section className="bg-black">
        {/* <button>Log in</button> */}
        <Slider {...settings} className="w-full">
          <div className="w-full h-screen border-solid border-4 border-red-600">
            <img className="w-full h-full" alt="film_img" src={book_img} />
          </div>
          <div className="w-full h-screen border-solid border-4 border-red-600">
            <img className="w-full h-full" alt="film_img" src={captain_img} />
          </div>
          <div className="w-full h-screen border-solid border-4 border-red-600">
            <img className="w-full h-full" alt="film_img" src={colette_img} />
          </div>
          <div className="w-full h-screen border-solid border-4 border-red-600">
            <img className="w-full h-full" alt="film_img" src={eco_img} />
          </div>
          <div className="w-full h-screen border-solid border-4 border-red-600">
            <img className="w-full h-full" alt="film_img" src={florida_img} />
          </div>
        </Slider>
        {/* <div className="content">
          <img src={logo} alt="logo" />
          <h1 className="text-white">Enjoy Thoughtful Entertainment</h1>
          <p className="text-white">
            Stream thousands of films for free, thanks to the generous support
            of your public library or university
          </p>
          <StartButton>Get Started</StartButton>
          <p className="text-white">
            Available in participating public libraries, colleges and
            universities.
          </p>
        </div> */}
      </section>
    );
  }
}

export default App;

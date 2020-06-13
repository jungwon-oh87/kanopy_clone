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
import BorderedButton from "./components/bordered-button/borderedButton.component";
import Tab from "./components/tab/tab.component";

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popularMovies: [],
      nowPlaying: [],
    };
  }
  gradientStyle = {
    background: "rgb(184, 189, 196)",
    background:
      "radial-gradient(circle, rgba(184,189,196,1) 0%, rgba(1,6,14,1) 51%, rgba(3,25,56,1) 100%)",
  };

  componentDidMount() {
    Promise.all([
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      ).then((value) => value.json()),
      fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
      ).then((value) => value.json()),
    ]).then((data) => {
      const popular = data[0];
      const now = data[1];

      this.setState(
        { popularMovies: popular.results, nowPlaying: now.results },
        () => {
          console.log("checking state: ", this.state.popularMovies);
          console.log("checking state: ", this.state.nowPlaying);
        }
      );
    });
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      arrows: false,
      fade: true,
      draggable: false,
    };

    const call_action_settings = {
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 0,
      cssEase: "linear",
    };

    return (
      <div className="grid grid-cols-1 bg-black">
        <section className="relative">
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
        <section className="relative">
          {/* <button>Log in</button> */}
          <div className="w-full z-0">
            <img className="w-full" alt="film_img" src={call_img} />
          </div>
          <div className="absolute w-2/5 right-0 top-0 flex flex-col mr-20 z-1">
            <h1 className="text-white font-semibold text-4xl tracking-wider leading-tight mt-20 mb-10">
              Start streaming movies today with your public library card or
              university login
            </h1>
            <p className="text-white font-thin text-lg tracking-wider mb-10 ">
              We partner with public libraries and universities to bring you
              ad-free films and series that can be enjoyed on your TV, mobile
              phone, tablet and online.
            </p>
            <StartButton width="w-2/5">Get Started</StartButton>
          </div>
        </section>
        <section>
          <div className="text-center text-white font-semibold text-4xl tracking-wider leading-tight mt-20 mb-20">
            Enjoy critically-acclaimed movies,
            <br /> inspiring documentaries, award-winning <br /> foreign films
            and more
          </div>
          <Slider {...call_action_settings}>
            {this.state.popularMovies.map((m) => {
              return (
                <div className="w-full h-auto border-solid" key={m.id}>
                  <img
                    className="w-4/5 h-full m-auto object-cover"
                    alt="film_img"
                    src={`http://image.tmdb.org/t/p/w154/` + m.poster_path}
                  />
                </div>
              );
            })}
          </Slider>
          <br />
          {console.log("nowPlaying checking: ", this.state.nowPlaying)}
          <Slider {...call_action_settings} speed={7000}>
            {this.state.nowPlaying.map((m) => {
              return (
                <div className="w-full h-auto border-solid" key={m.id}>
                  <img
                    className="w-4/5 h-full m-auto object-cover"
                    alt="film_img"
                    src={`http://image.tmdb.org/t/p/w154/` + m.poster_path}
                  />
                </div>
              );
            })}
          </Slider>
          <div className="w-1/2 m-auto mt-10 mb-10">
            <p className="text-white text-center font-semibold text-3xl tracking-wider leading-tight">
              Stream these movies and thousands more
            </p>
            <br />
            <div className="w-1/3 m-auto">
              <BorderedButton>Browse Movies</BorderedButton>
            </div>
          </div>
        </section>
        <section style={this.gradientStyle}>
          <div className="text-center text-white font-bold text-4xl tracking-wider leading-tight mt-20 mb-20 w-2/3 ml-auto mr-auto pl-20 pr-20">
            Stream on all your favorite devices, any time, anywhere
          </div>
          <Tab></Tab>
        </section>
      </div>
    );
  }
}

export default App;

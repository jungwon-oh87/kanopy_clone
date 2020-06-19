import React from "react";
import HomePage from "./pages/home/home-page.component";

const App = () => {
  return (
    <div>
      <HomePage />
    </div>
  );
};

// const API_KEY = process.env.REACT_APP_API_KEY;

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       popularMovies: [],
//       nowPlaying: [],
//       accordionBlocks: [true, false, false, false, false, false],
//     };
//   }
//   gradientStyle = {
//     background:
//       "radial-gradient(circle, rgba(121,149,187,1) 0%,rgba(25,31,40,1) 65%, rgba(0,0,0,1) 100%)",
//   };
//   accordionList = [
//     {
//       title: "What is Kanopy?",
//       content:
//         "Kanopy is the best video streaming service for quality, thoughtful entertainment. Find movies, documentaries, foreign films, classic cinema, independent films and educational videos that inspire, enrich and entertain. We partner with public libraries and universities to bring you an ad-free experience that can be enjoyed on your TV, mobile phone, tablets and online.",
//     },
//     {
//       title: "How is Kanopy free for me?",
//       content:
//         "Just as your library buys books to add to their collection for you to borrow, your library offers a variety of digital resources too - Kanopy is one of their more popular digital resources. Kanopy does not charge you because the public library or university covers all associated costs, allowing you to watch for free with no ads.",
//     },
//     {
//       title: "Why do I need a library card or university login to sign up?",
//       content:
//         "Kanopy is only available through libraries, so you need to be a member of a participating library to start watching Kanopy." +
//         "\n" +
//         "If you are a member of a participating public library, you can start watching by signing up with a valid public library card number and PIN/password." +
//         "\n" +
//         "If you are a currently registered student or faculty member of a participating college university, you can start watching by signing up with a valid university login.",
//     },
//     {
//       title: "How do I know if my library or university offers Kanopy?",
//       content:
//         "For public libraries, check to see if your library has made Kanopy available here. Type in the name of your library, or enter your zip code to display nearby libraries that have made Kanopy available." +
//         "\n" +
//         "For universities, check to see if your library has made Kanopy available here. Type in the name of your university to see if they have made Kanopy available." +
//         "\n" +
//         "Don’t see your library listed? Click on “Can’t find your library” and fill out the form to request that your library makes Kanopy available.",
//     },
//     {
//       title: "How do I get started?",
//       content:
//         "Getting started is easy! Click here to find your library and enter your library card information or university login when prompted. Follow the simple instructions to create your Kanopy account using your email address or Facebook/Google login and then start watching.",
//     },
//     {
//       title: "What is Kanopy Kids?",
//       content:
//         "Kanopy Kids is our collection of movies and shows for kids available in public libraries only. Your public library offers unlimited plays in Kanopy Kids, so your kids are free to explore enriching, educational and entertaining films and TV series. Click here to check out Kanopy Kids!",
//     },
//   ];
//   accord_toggle = (index) => {
//     let temp = [...this.state.accordionBlocks];
//     let i = 0;
//     for (i; i < temp.length; i++) {
//       temp[i] = false;
//     }

//     temp[index] = !temp[index];
//     this.setState({ accordionBlocks: temp }, () => {
//       console.log("checking Accorion blocks: ", this.state.accordionBlocks);
//     });
//   };
//   componentDidMount() {
//     Promise.all([
//       fetch(
//         `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
//       ).then((value) => value.json()),
//       fetch(
//         `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
//       ).then((value) => value.json()),
//     ]).then((data) => {
//       const popular = data[0];
//       const now = data[1];

//       this.setState(
//         { popularMovies: popular.results, nowPlaying: now.results },
//         () => {
//           console.log("checking state: ", this.state.popularMovies);
//           console.log("checking state: ", this.state.nowPlaying);
//         }
//       );
//     });
//   }

//   render() {
//     const settings = {
//       dots: false,
//       infinite: true,
//       autoplay: true,
//       arrows: false,
//       fade: true,
//       draggable: false,
//     };

//     const call_action_settings = {
//       dots: false,
//       arrows: false,
//       infinite: true,
//       slidesToShow: 4,
//       slidesToScroll: 1,
//       autoplay: true,
//       speed: 5000,
//       autoplaySpeed: 0,
//       cssEase: "linear",
//     };

//     return (
//       <div className="grid grid-cols-1 bg-black">
//         <section className="relative">
//           {/* <button>Log in</button> */}
//           <Slider {...settings} className="w-full z-0">
//             <div className="w-full h-screen">
//               <img
//                 className="w-full h-full object-cover"
//                 alt="film_img"
//                 src={book_img}
//               />
//             </div>
//             <div className="w-full h-screen">
//               <img
//                 className="w-full h-full object-cover"
//                 alt="film_img"
//                 src={captain_img}
//               />
//             </div>
//             <div className="w-full h-screen">
//               <img
//                 className="w-full h-full object-cover"
//                 alt="film_img"
//                 src={colette_img}
//               />
//             </div>
//             <div className="w-full h-screen">
//               <img
//                 className="w-full h-full object-cover"
//                 alt="film_img"
//                 src={eco_img}
//               />
//             </div>
//             <div className="w-full h-screen">
//               <img
//                 className="w-full h-full object-cover"
//                 alt="film_img"
//                 src={florida_img}
//               />
//             </div>
//           </Slider>
//           <div className="absolute w-1/3 left-0 top-0 flex flex-col ml-6 z-1">
//             <h1 className="text-white font-serif font-normal text-5xl tracking-wide mt-8">
//               kan<span className="text-myPrimary">oh</span>py
//             </h1>
//             <h1 className="text-white font-bold text-5xl tracking-wider mt-20 mb-5 leading-tight">
//               Enjoy Thoughtful Entertainment
//             </h1>
//             <p className="text-white font-semibold text-xl tracking-wider mb-5 ">
//               Stream thousands of films for free, thanks to the generous support
//               of your public library or university
//             </p>
//             <div className="w-1/2">
//               <StartButton>Get Started</StartButton>
//             </div>
//             <p className="text-white text-sm font-thin w-2/3 mt-10 text-gray-300">
//               Available in participating public libraries, colleges and
//               universities.
//             </p>
//           </div>
//           {/* <div className="content">

//         </div> */}
//         </section>
//         <section className="relative">
//           {/* <button>Log in</button> */}
//           <div className="w-full z-0">
//             <img className="w-full" alt="film_img" src={call_img} />
//           </div>
//           <div className="absolute w-2/5 right-0 top-0 flex flex-col mr-20 z-1">
//             <h1 className="text-white font-semibold text-4xl tracking-wider leading-tight mt-20 mb-10">
//               Start streaming movies today with your public library card or
//               university login
//             </h1>
//             <p className="text-white font-thin text-lg tracking-wider mb-10 ">
//               We partner with public libraries and universities to bring you
//               ad-free films and series that can be enjoyed on your TV, mobile
//               phone, tablet and online.
//             </p>
//             <div className="w-2/5">
//               <StartButton>Get Started</StartButton>
//             </div>
//           </div>
//         </section>
//         <section>
//           <div className="text-center text-white font-semibold text-4xl tracking-wider leading-tight mt-20 mb-20">
//             Enjoy critically-acclaimed movies,
//             <br /> inspiring documentaries, award-winning <br /> foreign films
//             and more
//           </div>
//           <Slider {...call_action_settings}>
//             {this.state.popularMovies.map((m) => {
//               return (
//                 <div className="w-full h-auto border-solid" key={m.id}>
//                   <img
//                     className="w-4/5 h-full m-auto object-cover"
//                     alt="film_img"
//                     src={`http://image.tmdb.org/t/p/w154/` + m.poster_path}
//                   />
//                 </div>
//               );
//             })}
//           </Slider>
//           <br />
//           {console.log("nowPlaying checking: ", this.state.nowPlaying)}
//           <Slider {...call_action_settings} speed={7000}>
//             {this.state.nowPlaying.map((m) => {
//               return (
//                 <div className="w-full h-auto border-solid" key={m.id}>
//                   <img
//                     className="w-4/5 h-full m-auto object-cover"
//                     alt="film_img"
//                     src={`http://image.tmdb.org/t/p/w154/` + m.poster_path}
//                   />
//                 </div>
//               );
//             })}
//           </Slider>
//           <div className="w-1/2 m-auto mt-10 mb-10">
//             <p className="text-white text-center font-semibold text-3xl tracking-wider leading-tight">
//               Stream these movies and thousands more
//             </p>
//             <br />
//             <div className="w-1/3 m-auto">
//               <BorderedButton>Browse Movies</BorderedButton>
//             </div>
//           </div>
//         </section>
//         <section style={this.gradientStyle}>
//           <div className="text-center text-white font-bold text-4xl tracking-wider leading-tight mt-20 mb-20 w-2/3 ml-auto mr-auto pl-20 pr-20">
//             Stream on all your favorite devices, any time, anywhere
//           </div>
//           <Tab></Tab>
//           <div className="text-center text-white font-semibold text-2xl tracking-wider leading-tight mt-10 mb-20 w-2/3 ml-auto mr-auto pt-10 pl-20 pr-20 flex flex-col items-center border-solid border-t border-gray-600">
//             Start watching the latest movies any time, anywhere
//             <div className="w-1/3 mt-4">
//               <StartButton>Get Started</StartButton>
//             </div>
//           </div>
//         </section>
//         <section className="flex flex-col justify-center items-center">
//           <span className="w-full text-white my-10 text-4xl font-bold text-center">
//             Frequently Asked Questions
//           </span>
//           <dl className="w-full app-accordion-container">
//             {this.accordionList.map((accord, index) => (
//               <Accordion
//                 title={accord.title}
//                 content={accord.content}
//                 onClick={() => {
//                   console.log("acoordion clicked");
//                   this.accord_toggle(index);
//                 }}
//                 expand={this.state.accordionBlocks[index]}
//               />
//             ))}
//           </dl>
//           <span className="w-full text-white mt-10 mb-4 text-3xl font-semibold text-center">
//             Sign up today for free through your public library or university
//           </span>
//           <div className="w-1/6 mt-4">
//             <StartButton>Get Started</StartButton>
//           </div>
//         </section>
//       </div>
//     );
//   }
// }

export default App;

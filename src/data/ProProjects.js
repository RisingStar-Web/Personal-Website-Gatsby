import primXBT from "../assets/images/projects/primeXBT/logo.svg";
import morpheuslabs from "../assets/images/projects/morpheuslabs/logo.svg";
import anime from "../assets/images/projects/anime/logo.png";
import elevux from "../assets/images/projects/elevux/elevux-full-logo.png";
export default [
  {
    id: 1,
    title: "",
    icon: primXBT,
    description:
      "PrimeXBT is a Bitcoin-based platform that offers margin trading on several digital assets, including Bitcoin, Ethereum, Litecoin and Ripple. The company was founded in 2018 and has grown exponentially from the very beginning and currently serves customers in more than 150 countries. They provide their clients with the highest level of liquidity and access to a variety of trading tools. In addition, it maintains security and liquidity, and creates an environment where everyone can trade safely and efficiently.",
    githubPath: null,
    demoPath: null,
    year: "2020",
    techUsed: "Angular, NgRx, Vuetify, Angular Material, TypeScript",
    images: [
      {
        src: require("../assets/images/projects/primeXBT/home.png"),
        width: 1,
        height: 1,
      },
      {
        src: require("../assets/images/projects/primeXBT/trading.png"),
        width: 1,
        height: 1,
      },
      {
        src: require("../assets/images/projects/primeXBT/turboTrading.png"),
        width: 1,
        height: 1,
      },
      {
        src: require("../assets/images/projects/primeXBT/Account.png"),
        width: 1,
        height: 1,
      },
    ],
  },
  {
    id: 2,
    title: "Morpheus Labs SEED",
    icon: morpheuslabs,
    description:
      "Morpheus is a Singapore-based company providing businesses with an end-to-end Blockchain-Platform as a Service (BPaaS) solution for innovation and value creation. Its solution power-up blockchain application development offers ready-to-use development tools and applications in an agnostic environment with leading blockchain technologies to facilitate mass adoption.",
    githubPath: null,
    demoPath: null,
    year: "2019",
    techUsed: "React, Redux, Semantic UI, Node.js, JavaScript",
    images: [
      {
        src: require("../assets/images/projects/morpheuslabs/home.png"),
        width: 1,
        height: 1,
      },
      {
        src: require("../assets/images/projects/morpheuslabs/signup.png"),
        width: 1,
        height: 1,
      },
      {
        src: require("../assets/images/projects/morpheuslabs/dashboard.png"),
        width: 1,
        height: 1,
      },
      {
        src: require("../assets/images/projects/morpheuslabs/dashboard-light.png"),
        width: 1,
        height: 1,
      },
    ],
  },
  {
    id: 3,
    title: "",
    icon: anime,
    description:
      "This is a responsive movies app that displays the latest upcoming movies, built using ReactJS and React-Query.The Movie Database (TMDb) API is used to fetch data. Can search for movies based on movie name. Can view full details including cast members of each movie by clicking on 'See More' button.",
    githubPath: "https://github.com/RisingStar-Web/mobx-tmdb-react-app",
    demoPath: "http://anime-movie.netlify.app/",
    year: "2019",
    techUsed: "React, React-Query, Material-UI, TMDb api",
    images: [
      {
        src: require("../assets/images/projects/anime/home.png"),
        width: 1,
        height: 1,
      },
      {
        src: require("../assets/images/projects/anime/categories.png"),
        width: 1,
        height: 1,
      },
      {
        src: require("../assets/images/projects/anime/anime-details.png"),
        width: 1,
        height: 1,
      },
      {
        src: require("../assets/images/projects/anime/watch.png"),
        width: 1,
        height: 1,
      },
    ],
  },
  {
    id: 4,
    title: "",
    icon: elevux,
    images: [
      {
        src: require("../assets/images/projects/elevux/home.png"),
        width: 2,
        height: 2,
      },
      {
        src: require("../assets/images/projects/elevux/argumented-reality.png"),
        width: 2,
        height: 2,
      },
      {
        src: require("../assets/images/projects/elevux/our-work.png"),
        width: 2,
        height: 2,
      },
      {
        src: require("../assets/images/projects/elevux/about-us.png"),
        width: 2,
        height: 2,
      },
    ],
    description:
      "Eluvux is an immersive content studio with a passion for building disruptive experiences that transform brands and captivate people..",
    // githubPath: "https://github.com/RisingStar-Web/mobx-tmdb-react-app",
    // demoPath: "http://mobx-tmdb-app.surge.sh/",
    year: "2016",
    techUsed:
      "WordPress, Elementor, Elementor Addons, Contact Form 7, Revolution Slider, Yoast SEO",
  },
];

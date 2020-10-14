import primXBT from '../assets/images/projects/primeXBT/logo.svg'
import morpheuslabs from '../assets/images/projects/morpheuslabs/logo.svg'
import tmdb from '../assets/images/projects/tmdb/logo.svg'
export default [
    {
        id: 1,
        title: "PrimeXBT",
        icon: primXBT,
        description: "PrimeXBT is a Bitcoin-based platform that offers margin trading on several digital assets, including Bitcoin, Ethereum, Litecoin and Ripple. The company was founded in 2018 and has grown exponentially from the very beginning and currently serves customers in more than 150 countries. They provide their clients with the highest level of liquidity and access to a variety of trading tools. In addition, it maintains security and liquidity, and creates an environment where everyone can trade safely and efficiently.",
        githubPath: null,
        demoPath: null,
        year: "2020",
        techUsed: "Vue, Vuex, Vuetify, Nodejs, TypeScript",
        images:[
            {
                src: require('../assets/images/projects/primeXBT/home.png'),
                title: 'PrimeXBT',
                description:'PrimeXBT Home Page'
            },
            {
                src: require('../assets/images/projects/primeXBT/trading.png'),
                title: 'PrimeXBT',
                description:'PrimeXBT Leverage Trading Page'
            },
            {
                src: require('../assets/images/projects/primeXBT/turboTrading.png'),
                title: 'PrimeXBT',
                description:'PrimeXBT Turbo Trading Page'
            },
            {
                src: require('../assets/images/projects/primeXBT/account.png'),
                title: 'PrimeXBT',
                description:'PrimeXBT Account Page'
            }
        ]
    },
    {
        id: 2,
        title: "Morpheus Labs SEED",
        icon: morpheuslabs,
        description: "Morpheus is a Singapore-based company providing businesses with an end-to-end Blockchain-Platform as a Service (BPaaS) solution for innovation and value creation. Its solution power-up blockchain application development offers ready-to-use development tools and applications in an agnostic environment with leading blockchain technologies to facilitate mass adoption.",
        githubPath: null,
        demoPath: null,
        year: "2019",
        techUsed: "React, Redux, Semantic UI, Node.js, JavaScript",
        images:[
            {
                src: require('../assets/images/projects/morpheuslabs/home.png'),
                title: 'Morpheus Labs SEED',
                description:'Morpheus Labs SEED Home Page'
            },
            {
                src: require('../assets/images/projects/morpheuslabs/signup.png'),
                title: 'Morpheus Labs SEED',
                description:'Morpheus Labs SEED SignUp Page'
            },
            {
                src: require('../assets/images/projects/morpheuslabs/dashboard.png'),
                title: 'Morpheus Labs SEED',
                description:'Morpheus Labs SEED Dashboard Page'
            },
            {
                src: require('../assets/images/projects/morpheuslabs/dashboard-light.png'),
                title: 'Morpheus Labs SEED',
                description:'Morpheus Labs SEED Light Dashboard Page'
            }
        ]
    },
    {
		id: 3,
		title: "React MobX Movies App",
        icon: tmdb,
        images:[
            {
                src: require('../assets/images/projects/tmdb/home.png'),
                title: 'React App using TMDB',
                description:'Morpheus Labs SEED Home Page'
            },
            {
                src: require('../assets/images/projects/tmdb/tv-shows.png'),
                title: 'React App using TMDB',
                description:'React App using TMDB TV Shows Page'
            },
            {
                src: require('../assets/images/projects/tmdb/card.png'),
                title: 'React App using TMDB',
                description:'React App using TMDB Movie Card Page'
            },
            {
                src: require('../assets/images/projects/tmdb/preview-details.png'),
                title: 'React App using TMDB',
                description:'React App using TMDB Card Details Page'
            }
        ],
		description:
			"This is a responsive movies app that displays the latest upcoming movies, built using ReactJS and utilizes MobX for state management.The Movie Database (TMDb) API is used to fetch data. Can search for movies based on movie name. Can view full details including cast members of each movie by clicking on 'See More' button.",
		githubPath: "https://github.com/RisingStar-Web/mobx-tmdb-react-app",
		demoPath: "http://mobx-tmdb-app.surge.sh/",
		year: "2019",
		techUsed: "React, MobX, Material-UI, TMDb api"
	},
    {
		id: 4,
		title: "Elevux",
        icon: tmdb,
        images:[
            {
                src: require('../assets/images/projects/elevux/home.png'),
                title: 'Elevux',
                description:'Elevux Home Page'
            },
            {
                src: require('../assets/images/projects/elevux/argumented-reality.png'),
                title: 'Elevux',
                description:'Elevux Argumented Reality Page'
            },
            {
                src: require('../assets/images/projects/elevux/our-work.png'),
                title: 'Elevux',
                description:'Elevux Work Page'
            },
            {
                src: require('../assets/images/projects/elevux/about-us.png'),
                title: 'Elevux',
                description:'Elevux About Us Page'
            }
        ],
		description:
			"Eluvux is an immersive content studio with a passion for building disruptive experiences that transform brands and captivate people..",
		// githubPath: "https://github.com/RisingStar-Web/mobx-tmdb-react-app",
		// demoPath: "http://mobx-tmdb-app.surge.sh/",
		year: "2016",
		techUsed: "WordPress, Elementor, Elementor Addons, Contact Form 7, Revolution Slider, Yoast SEO"
	},

];

import movie from "../assets/images/projects/movie.svg";
import audio from "../assets/images/projects/audio.svg";
import game from "../assets/images/projects/game.svg";
import quote from "../assets/images/projects/quote.svg";
import fitness from "../assets/images/projects/fitness.svg";

export default [
	{
		id: 1,
		title: "React Redux Movies/TV Shows App",
		icon: movie,
		description:
			"This is a responsive movies and TV shows app built using ReactJS and utilizes Redux for state management. The Movie Database (TMDb) API is used to fetch data. You can navigate between the latest movies and the latest TV shows.",
		githubPath: "https://github.com/RisingStar-Web/react-redux-TMDb-app",
		demoPath: "https://redux-tmdb-app.surge.sh/",
		year: "2018",
		techUsed: "React, Redux, Redux-Thunk, TMDb api"
	},
	{
		id: 2,
		title: "Music Artist Search App",
		icon: audio,
		description:
			"This is a small and simple artist search app developed in ReactJS using the audioDB api.",
		githubPath: "https://github.com/RisingStar-Web/audioDB-react-app",
		demoPath: "https://audiodb-artist-searchapp.surge.sh",
		year: "2018",
		techUsed: "React, Material-UI, theaudiodb"
	},
	
	{
		id: 3,
		title: "Exercise Journal API",
		icon: fitness,
		description:
			"A REST API that processes exercise activity which was part of the freecode curriculum. The frontend is built using HTML/CSS and is used to demo API functions. API is built using Node/Express and handles data creation, updates, and retrieval. Backend is a MongoDB document database that stores user and exercise data.",
		githubPath: "https://github.com/RisingStar-Web/fcc-exercisetracker",
		demoPath: "https://exercise-rash-tracker.glitch.me",
		year: "2018",
		techUsed: "NodeJS, MongoDB, Mongoose"
	},
	{
		id: 4,
		title: "React MobX Movies App",
		icon: movie,
		description:
			"This is a responsive movies app that displays the latest upcoming movies, built using ReactJS and utilizes MobX for state management.The Movie Database (TMDb) API is used to fetch data. Can search for movies based on movie name. Can view full details including cast members of each movie by clicking on 'See More' button.",
		githubPath: "https://github.com/RisingStar-Web/mobx-tmdb-react-app",
		demoPath: "http://mobx-tmdb-app.surge.sh/",
		year: "2019",
		techUsed: "React, MobX, Material-UI, TMDb api"
	},
	{
		id: 5,
		title: "React Quote Machine",
		icon: quote,
		description: "A responsive ReactJS random quote generator machine 🔮",
		githubPath: "https://github.com/RisingStar-Web/react-quote-machine",
		demoPath: "https://react-quote-machine.surge.sh",
		year: "2018",
		techUsed: "React, create-react-app"
	}
];

import Docimg from "../images/doctorsverse.png"
import Facimg from "../images/face-recognition.png"
import Whatimg from "../images/whatsapp-clone.png"
import Netimg from "../images/netflix-clone-2.png"
import Wether from "../images/weather-app.png"
import Todoimg from "../images/TodoList-MERN.png"

const ProjectData = [
    {
        id: 1,
        image: Docimg,
        title: "DoctorsVerse",
        desc:
            `(Group Project) A website that allows user to book any doctor from any hospital in their area,
            using React.js in frontend, node.js and express in backend, and MySQL as database`,
        link: 'https://doctorsverse-frontend.herokuapp.com/'
    },
    {
        id: 2,
        image: Facimg,
        title: "Face Recognition",
        desc:
            `A website that finds human faces in any image provided. Using machine learning from Clarifai API, it is 
            created using react.js in frontend, node.js in backend and PostgreSQL as database`,
        link: 'https://face-recognition-frontend-3375.herokuapp.com/'
    },
    {
        id: 3,
        image: Whatimg,
        title: "Whatsapp Clone",
        desc:
            `A One-to-One chatting website similar to Whatsapp using Next.js and Firebase Firestore and
            Google Authentication`,
        link: 'https://whatsapp-clone-nextjs.herokuapp.com/'
    },
    {
        id: 4,
        image: Netimg,
        title: "Netflix Clone",
        desc:
            `A netflix clone website, using react.js and Firebase Firestore Database and 
            Authenication along with Stripe payment checkout feature`,
        link: 'https://netflix-clone-by-agni.herokuapp.com/'
    },
    {
        id: 5,
        image: Wether,
        title: "Weather App",
        desc:
            `A simple single-page weather app using React.js and openweathermap API`,
        link: 'https://weather-app-reactjs3375.herokuapp.com/'
    },
    {
        id: 6,
        image: Todoimg,
        title: "Todo List App",
        desc:
            `A To-do List app, implementing CRUD operations using MERN stack, with hosting 
            react.js, node.js & express.js on Heroku, and the Mongo Database on
            Mongo Cloud Atlas`,
        link: 'https://todolist-frontend-mern-crud.herokuapp.com/'
    },
]

export default ProjectData
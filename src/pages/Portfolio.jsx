/* eslint-disable react/prop-types */
import '../assets/css/Portfolio.css'
import movieFinderImage from '../assets/images/MFscreenshot1.png'
import weatherImage from '../assets/images/weatherDashBoardSS.png'
import crud from '../assets/images/crud.png'
import { Link } from 'react-router-dom';


const projectData =[
    {
        image: crud,
        title: 'social network api',
        description: 'So this is the back end for a social network api and it consit of users and there thoughts. With thoughts other users can make reaction to there thoughts aswell. A user can also add friends of other user to there friends list. It\'s the basic CRUD using mongoose DB.',
        tech: ['Postman Testing', 'Mongoose', 'CRUD', 'js'],
        github: 'https://github.com/Giovanni-Ramirez/social-network-api',
        liveLink: 'n/a'
    },
    {
        image: movieFinderImage,
        title: 'Movie Finder',
        description: 'This was my first group project. So we made a movie finder website where you would be able to see the most recent movies. You could also search for movies and add them to a list and get rid of them when ever you watch that movie!',
        tech: ['Bootstrap','jquery', 'Youtub api', 'TMDB api'],
        github: 'https://github.com/akosla00/MovieFinder',
        liveLink: 'https://akosla00.github.io/MovieFinder/index.html'
    },
    {
        image: weatherImage,
        title: 'Weather Dash Board',
        description: 'This project use a Weather Api to give you the weather. You can search by City and it would save your past search and can be view by clicking that button. The back ground would dynamically change based on the weather.',
        tech: ['Weather Api', 'html', 'css', 'js'],
        github: 'https://github.com/Giovanni-Ramirez/weatherDashBoard',
        liveLink: 'https://giovanni-ramirez.github.io/weatherDashBoard/'
    },
]

const Project = ({image, title, description, tech, github, liveLink}) => (
    <div className="project row mb-4">
        <div className="col-sm-5 image-container">
            <img src={image} alt="" />
        </div>
        <div className="text-container col-sm-7 row">
            <div className="col">
                <h5>Main Points</h5>
                <ul>
                    <span className='main-points'><li>{tech[0]}</li></span>
                    <span className='main-points'><li>{tech[1]}</li></span>
                    <span className='main-points'><li>{tech[2]}</li></span>
                    <span className='main-points'><li>{tech[3]}</li></span>
                </ul>
            </div>
            <div className="col-8">
                <h5>{title}</h5>
                <p>{description}</p>
                <div>
                    <a href={liveLink} target='_blank'><button className='porfolioButton'>live link</button></a>
                    <a href={github} target='_blank'><button className='porfolioButton'>github</button></a>
                </div>
            </div>
        </div>
    </div>
)


function Portfolio () {
    return (
        <>
        <h1 className="title-page text-center">Portfolio</h1>
        <section className="container">
            <div>
                {projectData.map(project => (
                    <Project key={project.index} image={project.image} title={project.title} description={project.description} tech={project.tech} github={project.github} liveLink={project.liveLink}/>
                ))}
            </div>
        <div className='d-flex justify-content-center'>
            <Link to='/Contact' id='contact-link'>
                    contact
            </Link> 
        </div>
        </section>
        </>
    )
}

export default Portfolio;
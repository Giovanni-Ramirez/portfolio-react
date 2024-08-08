import '../assets/css/about.css'
import { Link } from 'react-router-dom';

function About () {
    return (
        <>
        <section className='about-me d-flex flex-wrap justify-content-evenly align-items-center p-4'>
            <div className="hero-image-container ">
                <img src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*" alt="" />
            </div>
            <div className="about-me-info p-4">
                <h2>About Me</h2>
                <p>Hi and welcome to my page, I&apos;m Giovanni and I&apos;m a fullstack web developer. I like to go to the gym, church on sundays, hiking, reading, and love going out to eat sushi with my friend group.</p>
                <h2>History</h2>
                <p>I have alway had an intrest in programing from when I was in robotics club and looking at the older guys code up a working robot. I remember distinctly one of the teacher asking the programmers about a problem and I thought about it and came up with an answer in my mind and the teacher solution was what I was thinking. I took a coding class in high school and I did not know what I was doing or learning. So I thought coding wasn&apos;t for me but as the years went on I still had a intrest in coding. I started to learn from youtube but I got stuck in tutorial hell. So I knew I needed some sort of structure and so I took a bootcamp and now I am here. I know frontend as well as the backend. I can make functioning working website now!</p>
                <h2>Future</h2>
                <p>My plans is to find a job in the field and start off running. I also have some side project ideas. I would also like to learn game development.</p>
                <Link to='/Portfolio' className="nav-link">
                    <button>
                        Portfolio
                    </button>
                </Link>
            </div>
        </section>
        
        </>
    )
}

export default About;
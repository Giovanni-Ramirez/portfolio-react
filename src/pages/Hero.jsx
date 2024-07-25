// import faceImage from './assets/images/regain.jpg'
import '../assets/css/hero.css'
import { Link } from 'react-router-dom';

function Hero () {
    return (
        <div className="hero d-flex justify-content-center align-items-center flex-wrap justify-content-evenly p-4">
            <div className='info'>
              <h1>I'm Giovanni a <br />Web Developer</h1>
            <p>I'm a fullstack web developer. I create great looking<br /> and functioning website for you and your audience.</p>
                <Link to='/About' className="nav-link">
                    <button>
                        About
                    </button>  
                </Link>    
            </div>
            <div className="hero-image-container">
                <img src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*" alt="" />
            </div>
        </div>
    )
}

export default Hero;
import faceImage from '../assets/images/regain.jpg';
import '../assets/css/hero.css';
import { Link } from 'react-router-dom';

function Hero () {
    return (
        <div className="hero d-flex justify-content-center align-items-center flex-wrap justify-content-evenly p-4">
            <div className='info'>
              <h1>I&apos;m <span className='high-light'>Giovanni</span> a <br />Full Stack <span className='high-light'>Developer</span></h1>
            <p>I&apos;m a fullstack web developer. I create great looking<br /> and functioning website for you and your audience.</p>
                <Link to='/About' className="nav-link">
                    <button>
                        About
                    </button>  
                </Link>    
            </div>
            <div className="hero-image-container">
                <img src={faceImage} alt="picture of user" />
            </div>
        </div>
    )
}

export default Hero;
import '../assets/css/nav.css'
import '../assets/css/colors.css'
import { Link } from 'react-router-dom';

function NavBar () {


    return (
        <nav className="navbar navbar-expand-sm bg-body-tertiary">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand">
                    Giovanni Ramirez
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-3">
                    <li className="nav-item">
                        <Link to="/About" className="nav-link">
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Portfolio" className="nav-link">
                            Portfolio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Contact" className="nav-link">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
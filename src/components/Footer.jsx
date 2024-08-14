import githublogo from '../assets/images/github-logo.png'
import '../assets/css/footer.css'

function Footer () {
    return (
        <div className="footer-div d-flex justify-content-center align-items-center">
            <div id='github-circle'>
                <a href='https://github.com/Giovanni-Ramirez' target='_blank'><img id='github-image' src={githublogo} alt="" /></a>
            </div>
            <div>
                made by: Giovanni
            </div>
        </div>
    )
}

export default Footer
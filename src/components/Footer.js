import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="column c1">
                    {/* <strong><Link className="navlink" to="/about">About me</Link></strong> */}
                    <strong><Link className="navlink" to="/projects">My Projects</Link></strong>
                    <strong><Link className="navlink" to="/resume">Resume</Link></strong>
                    <strong><Link className="navlink" to="/contact">Contact</Link></strong>
                </div>                
                <div className="column c3">
                    <p><strong>Contact me at</strong></p>
                    <p><strong>david.edu.eche@gmail.com</strong></p>
                    <p><strong>09989926261</strong></p>
                    <p><strong><a href="https://www.facebook.com/DavidEduEchegoyen/" target="_blank" rel="noreferrer">www.facebook.com/DavidEduEchegoyen</a></strong></p>
                    <p><strong><a href="https://www.linkedin.com/in/david-echegoyen-1b755a1a5/" target="_blank" rel="noreferrer">www.linkedin.com/in/david-echegoyen-1b755a1a5</a></strong></p>
                </div>                
            </div>      
            <div className="socials">
                <div><p><a href="https://www.facebook.com/DavidEduEchegoyen/" target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a></p></div>
                <div><p><i className="fab fa-twitter fa"></i></p></div>
                <div><p><a href="https://www.linkedin.com/in/david-echegoyen-1b755a1a5/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a></p></div>
                
                
            </div>  
            <div className="cr">
                 <p>© Copyright 2021 David Echegoyen</p>
            </div>    
        </div>
    )
}

export default Footer

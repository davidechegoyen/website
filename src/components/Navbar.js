import './Navbar.css';
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    //Navigation bar states
    const [hamburger, hamburgerSetState] = useState(false)
    const [windowSize , windowsizeSetState] = useState(window.innerWidth)
    //Functions in use
    const hamburgerOnClick = () =>hamburgerSetState(!hamburger)
    const closeHamgurberOnClick = ()=>hamburgerSetState(false)
    //function that sets windowsizestate to window.innderWidth value
    const changeWindowSize = ()=>{
        windowsizeSetState(window.innerWidth)
        hamburgerSetState(false)
    }    
    window.addEventListener('resize', changeWindowSize)
    
    if(windowSize<750){
        return (
            <div className="navbar-space">
                <div className="navigation-bar">
                    <div className="navigation-bar-content">
                        <div className="icon"><Link to="/website" onClick={closeHamgurberOnClick}>dee</Link></div>
                        <div className="hamburger" onClick={hamburgerOnClick}>
                            {hamburger?<i className="fas fa-times fa-2x"></i>:<i className="fas fa-bars fa-2x"></i>}
                        </div>                        
                    </div>                 
                </div>  
               <ul className={hamburger?"navdropdown-open":"navdropdown-close"}>
                    {/* <li><Link className="navlink" to="/about" onClick={hamburgerOnClick}><i className="fas fa-guitar"></i> About me</Link></li>  */}
                    <li><Link className="navlink" to="/projects" onClick={hamburgerOnClick}><i className="fas fa-laptop"></i> Projects</Link></li>
                    <li><Link className="navlink" to="/resume" onClick={hamburgerOnClick}><i className="fas fa-paperclip"></i> Resume</Link></li>
                    <li><Link className="navlink" to="/contact" onClick={hamburgerOnClick}><i className="fas fa-phone"></i> Contact me</Link></li>
                </ul>       
            </div>
        )
    }else{
        return(
            <div className="navbar-space">
                <div className="navigation-bar">
                    <div className="navigation-bar-content">
                        <div className="icon"><Link to="/">dee</Link></div>   
                        <ul>
                            <li>
                                {/* <Link className="navlink" to="/about"><i className="fas fa-guitar"></i> About me</Link> */}
                                <Link className="navlink" to="/projects"><i className="fas fa-laptop"></i> Projects</Link>
                                <Link className="navlink" to="/resume"><i className="fas fa-paperclip"></i> Resume</Link>
                                <Link className="navlink" to="/contact"><i className="fas fa-phone"></i> Contact me</Link>
                            </li>
                        </ul>                
                    </div>
                </div>            
            </div>
        )
    }

  
}

export default Navbar

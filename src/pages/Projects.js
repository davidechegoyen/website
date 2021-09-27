import './Projects.css'
import Button from '../components/Button'

import ecommerceimg from '../images/ecommerce/homepage1.JPG'
import crudimg from '../images/crud/userspic.JPG'
import loginauthimg from '../images/loginauth/mainpagepic.JPG'
import foodappimg from '../images/foodrecipeapplication/mainimage.JPG'

const Projects = () => {
    return (
        <div className="projectpage-bg">
            <div className="projectpage-content">   
                <div className="title">
                    <h1>My Projects</h1>
                </div>  
                <div className="project-card-container">
                    <div className="project-card">
                        <h1>E-commerce site</h1>
                        <img src={ecommerceimg} alt='ecommerce--img'></img>
                        <label>Description</label>
                        <p>An e-commerce site with a functional shopping cart feature</p>
                        <p><strong>HTML <i className="fab fa-html5"></i>, CSS <i className="fab fa-css3-alt"></i>, React <i className="fab fa-react"></i></strong></p>
                        <Button buttonStyle="btn--basic"><a href="https://davidechegoyen.github.io/react-deploy-test/" target="_blank" rel="noreferrer">Live</a></Button>
                        <Button buttonStyle="btn--basic"><a href="https://github.com/davidechegoyen/react-deploy-test/tree/master" target="_blank" rel="noreferrer">Github</a></Button>

                        
                    </div>        
                    <div className="project-card">
                        <h1>CRUD application</h1>
                        <img src={crudimg} alt='crud--img'></img>
                        <p>A simple application that creates profiles that can be edited or deleted from a database</p>
                        <p><strong>HTML <i className="fab fa-html5"></i>, CSS <i className="fab fa-css3-alt"></i>, React <i className="fab fa-react"></i>, Node JS <i className="fab fa-node-js"></i>, Mongo DB</strong></p>
                        <Button buttonStyle="btn--basic"><a href="https://davidechegoyen.github.io/crud-application-deploy/" target="_blank" rel="noreferrer">Live</a></Button>
                        <Button buttonStyle="btn--basic"><a href="https://github.com/davidechegoyen/crud-application-deploy/tree/master" target="_blank" rel="noreferrer">Client Github</a></Button>
                        <Button buttonStyle="btn--basic"><a href="https://github.com/davidechegoyen/crud-application-crud-server" target="_blank" rel="noreferrer">Server Github</a></Button>
                    </div>   
                    <div className="project-card">
                        <h1>Login Authentication</h1>
                        <img src={loginauthimg} alt="loginauth--img"/>
                        <p>A simple application that lets you login or create your account. Information is stored in a database</p>
                        <p><strong>HTML <i className="fab fa-html5"></i>, CSS <i className="fab fa-css3-alt"></i>, React <i className="fab fa-react"></i>, Node JS <i className="fab fa-node-js"></i>, Mongo DB</strong></p>
                        <Button buttonStyle="btn--basic"><a href="https://davidechegoyen.github.io/login-authenticator-project/" target="_blank" rel="noreferrer">Live</a></Button>
                        <Button buttonStyle="btn--basic"><a href="https://github.com/davidechegoyen/login-authenticator-project" target="_blank" rel="noreferrer">Client Github</a></Button>
                        <Button buttonStyle="btn--basic"><a href="https://github.com/davidechegoyen/login-authenticator-server" target="_blank" rel="noreferrer">Server Github</a></Button>
                    </div>    
                    <div className="project-card">
                        <h1>Food application</h1>
                        <img src={foodappimg} alt="foodapp--img"/>
                        <p>An application that searches recipes for an ingredient you typed in the search box</p>
                        <p>It incorporates theamealdb.com's public meal API</p>
                        <p><strong>HTML <i className="fab fa-html5"></i>, CSS <i className="fab fa-css3-alt"></i>, React <i className="fab fa-react"></i>, Node JS <i className="fab fa-node-js"></i>, Mongo DB</strong></p>
                        <Button buttonStyle="btn--basic"><a href="https://davidechegoyen.github.io/foodrecipe-application/" target="_blank" rel="noreferrer">Live</a></Button>
                        <Button buttonStyle="btn--basic"><a href="https://github.com/davidechegoyen/foodrecipe-application/tree/master" target="_blank" rel="noreferrer">Client Github</a></Button>
                    </div>    
                </div>          
                      
            </div>            
        </div>
    )
}

export default Projects

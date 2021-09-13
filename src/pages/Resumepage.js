import './Resumepage.css'
import myimg from '../images/me.jpg'

const Resumepage = () => {
    return (
        <div className="resumepage-bg">
            <div className="resumepage-content">
                <div className="blocks row">
                     <img src={myimg} alt="profile--pic" className="profile--img"></img>
                    <div>
                        <h1>DAVID E. ECHEGOYEN</h1>
                        <p>BS Information Technology</p>
                        <p>with specialization in animation and game development</p>
                    </div>                  
                    
                </div>
                <div className="blocks skills-list">          
                    <div className="skills-icons"><strong>HTML</strong></div>
                    <div className="skills-icons"><strong>CSS</strong></div>
                    <div className="skills-icons"><strong>Javascript</strong></div>
                    <div className="skills-icons"><strong>React JS</strong></div>
                    <div className="skills-icons"><strong>Node JS</strong></div>
                    <div className="skills-icons"><strong>Express JS</strong></div>
                    <div className="skills-icons"><strong>Mongo DB</strong></div>                   
                </div>
                <div className="blocks">
                    <h1>Work history</h1>
                    <div className="workhistory-content">
                        <h2>Trend Micro</h2>
                        <p>System Engineer</p>
                        <p>August 2018 - August 2019</p>                        
                            <p>Set up and maintain Windows servers</p>
                            <p>Set up and imitate small business network environment</p>
                            <p>Troubleshoot network connection issues and software compatibility issues</p>                        
                    </div>                    
                </div>

            </div>
        </div>
    )
}

export default Resumepage

import "./Contactpage.css"
const Contactpage = () => {
    return (
        <div className="contactpage-bg">
            <div className="contactpage-content">
                <h1>You can reach me at</h1>
                <h2>Email <i className="far fa-envelope"></i> : david.edu.eche@gmail.com</h2>
                <h2>Cellphone number <i className="fas fa-mobile-alt"></i> : 09989926261</h2>
                <h2>Facebook <i className="fab fa-facebook-square"></i> : <a href="https://www.facebook.com/DavidEduEchegoyen/" target="_blank" rel="noreferrer">www.facebook.com/DavidEduEchegoyen</a></h2>
                <h2>LinkedIn <i className="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/david-echegoyen-1b755a1a5/" target="_blank" rel="noreferrer">www.linkedin.com/in/david-echegoyen-1b755a1a5</a></h2>
            </div>
        </div>
    )
}

export default Contactpage

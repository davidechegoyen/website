import './Homepage.css'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import img1 from '../images/ecommerce/homepage1.JPG'
import img2 from '../images/crud/userspic.JPG'
import img3 from '../images/loginauth/mainpagepic.JPG'
import img4 from '../images/foodrecipeapplication/mainimage.JPG'

const imgArray = [img1,img2,img3,img4]

const Homepage = () => {

    const [current, setCurrent] = useState(0)
    const length = imgArray.length

    const prevSlide = () => {
         setCurrent(current === 0 ? length - 1 : current - 1)
    }
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0:current+1)
    }

    console.log(current)

    return (
        <div className="homepage-bg">
            <div className="homepage-content">
                <div className="block1">
                    <h1>David Echegoyen</h1>
                    <h3>Junior web developer</h3>
                    <p>Self-tought in web development technologies in 
                    </p>
                    <p>HTML, CSS, Javascript, React, Node JS, Express, MongoDB.</p>
                    <Button buttonStyle={'btn--basic'}><Link to="/projects">My projects</Link></Button>
                </div>
                <div className="block2">                    
                    <div className="slider">
                        <i className="fas fa-arrow-left leftarrow" onClick={prevSlide}></i>
                        <i className="fas fa-arrow-right rightarrow" onClick={nextSlide}></i>
                            {imgArray.map((slide,index)=>{
                                return(
                                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                            {index === current && <img src={slide} alt="project img" />}                   
                                        </div>
                                )
                            })}
                        
                    </div>                        
                </div>
            </div>
        </div>
    )
}

export default Homepage

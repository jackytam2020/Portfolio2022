import React from 'react'
import "./TechUsed.css"
import HtmlIcon from '../../assets/images/html-svgrepo-com.svg'
import CssIcon from '../../assets/images/css-svgrepo-com.svg'
import JsIcon from '../../assets/images/js-svgrepo-com.svg'
import ReactIcon from '../../assets/images/react-svgrepo-com.svg'

const TechUsed = () => {
    return (
        <div className='tech-used-container'>
            <div className='tech-top'>
                <p>Technologies used for these Projects</p>
            </div>
            <div className='tech-bottom'>
                <img src={HtmlIcon} alt='Html'/>
                <img src={CssIcon} alt='Css'/>
                <img src={JsIcon} alt='JS'/>
                <img src={ReactIcon} alt='React'/>
            </div>
        </div>
    )
}

export default TechUsed
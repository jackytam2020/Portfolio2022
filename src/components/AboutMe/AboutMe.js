import React from 'react'
import { useEffect } from 'react'
import "./AboutMe.css"


const AboutMe = ({scrollDirection, className, scrollValue}) => {

    
    const changeBlockPosition = () => {
        let changingMarginTop = 70;
        scrollDirection == 'up'? changingMarginTop +=10 : changingMarginTop -= 10
        
        return changingMarginTop
    }

    useEffect(() => {
        changeBlockPosition();
    }, [scrollValue])

    const AboutMeContents = () => {
        return (
            <div>
                <div className='about-me-top'>
                    <p className={className}>Who Am I?</p>
                </div>
                <div className='about-me-bottom'>
                    <p className='about-me-copy'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker inclu</p>
                    <div className='overlapping-pictures'>
                        <img src={require('../../assets/images/portait-photo.jpg')} className='portrait-photo'/>
                        <div className='background-block' style={{marginTop:changeBlockPosition}} id="a"></div>
                    </div>
                </div>
            </div>
        )
    }

    const MobileAboutMeContents = () => {
        return (
            <div className='about-me-mobile-container'>
                <div className='overlapping-pictures'>
                        <img src={require('../../assets/images/portait-photo.jpg')} className='portrait-photo'/>
                        <div className='background-block' style={{marginTop:changeBlockPosition}} id="a"></div>
                </div>
                <div className='about-me-mobile-bottom'>
                    <p className={className}>Who Am I?</p>
                    <p className='about-me-copy'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker inclu</p>
                </div>
            </div>
        )
    }

   
    return (
        <div className='about-me-container' id="about">
            { window.screen.availWidth <= 1200 ? <MobileAboutMeContents /> : <AboutMeContents/>}
        </div>
    )
}

export default AboutMe
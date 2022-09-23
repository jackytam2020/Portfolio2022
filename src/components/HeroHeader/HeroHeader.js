import React from 'react'
import "./HeroHeader.css"

const HeroHeader = () => {
    return (
        <div className='hero-header-container'>
            <div className='hero-top'>
                <p>Jacky Tam</p>
            </div>
            <div className='hero-bottom'>
                <div className='hero-bottom-items'>
                    <div>
                        <p>Based in Vancouver</p>
                    </div>
                    <p>Web Developer</p>
                </div>
            </div>
        </div>
    )
}

export default HeroHeader
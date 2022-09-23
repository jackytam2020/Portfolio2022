import React, {useState} from 'react'
import './Contact.css'

import CallIcon from '../../assets/images/call-icon.svg'
import EmailIcon from '../../assets/images/email-icon.svg'
import LocationIcon from '../../assets/images/location-icon.svg'

import WhiteCallIcon from '../../assets/images/white-call-icon.svg'
import WhiteEmailIcon from '../../assets/images/white-email-icon.svg'
import WhiteLocationIcon from '../../assets/images/white-location-icon.svg'

import Button from '../Button/Button'


function Contact({darkMode}) {

    const formDefaultInfo = {
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
    }

    const [formValues, setFormValues] = useState(formDefaultInfo)
    const [buttonText, setButtonText] = useState('Send')
    const [status, setStatus] = useState({})

    const handleFormUpdate = (category, value) => {
        setFormValues({
            ...formValues,
            [category]: value
        })
    }

    const handleOnSubmit = async () => {
        // e.preventDefault();
        setButtonText('Sending...');
        let response = await fetch("http://localhost:5000/contact/contact", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json;charset=utf-8",
            },
            body: JSON.stringify(formValues)
        });
        setButtonText("Send");
        let result = response.json();
        setFormValues(formDefaultInfo);
        if(result.code === 200) {
            setStatus({ success: true, message:'Message Sent'})
        } else {
            setStatus({ success: false, message:'Message Unsuccessful'})
        }

        console.log(result)
    }

    return (
        <div className='contact-container' id="contact">
            <p>Let's have a chat</p>
            <div className='contact-bottom'>
                <div className='contact-bottom-left'>
                    <div className='contact-methods'>
                        
                        <div className='contact-method-item'>
                            <img src={darkMode ? WhiteCallIcon : CallIcon} alt="phone icon"/>
                            <div className='contact-right-info'>
                                <p>Call me</p>
                                <p>604-779-8265</p>
                            </div>
                        </div>

                        <div className='contact-method-item'>
                            <img src={darkMode ? WhiteEmailIcon : EmailIcon} alt="phone icon"/>
                            <div className='contact-right-info'>
                                <p>Email</p>
                                <p>jackytam2020@gmail.com</p>
                            </div>
                        </div>

                        <div className='contact-method-item'>
                            <img src={darkMode ? WhiteLocationIcon : LocationIcon} alt="phone icon"/>
                            <div className='contact-right-info'>
                                <p>Location</p>
                                <p>Vancouver, BC, Canada</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='contact-bottom-right'>
                    <form className='form-container' onSubmit={handleOnSubmit}>
                        <div className='input-name-row'>
                            <input className='first-name-input' type="text" required value={formValues.firstName} placeholder='First Name' onChange={(e) => handleFormUpdate('firstName', e.target.value)}></input>
                            <input className='last-name-input' type="text" required value={formValues.lastName} placeholder='Last Name' onChange={(e) => handleFormUpdate('lastName', e.target.value)}></input>
                        </div>
                        <input className='email-input' type="text" required value={formValues.email} placeholder='Email' onChange={(e) => handleFormUpdate('email', e.target.value)}></input>
                        <input className='subject-input' type="text" required value={formValues.subject} placeholder='Subject' onChange={(e) => handleFormUpdate('subject', e.target.value)}></input>
                        <textarea className='message-input' type="text" required value={formValues.message} placeholder='Message' onChange={(e) => handleFormUpdate('message', e.target.value)}></textarea>
                        <div className='button-div' onClick={() => {handleOnSubmit()}}><Button buttonText={buttonText}/></div>
                    </form>
                    
                    {
                        <p>{status.message}</p>
                    }
                </div>
            </div>
        </div>
    );
}

export default Contact;
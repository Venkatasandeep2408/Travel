import React from 'react'
import Side from '../assets/Gandikota.jpg';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide'
        style={{ backgroundImage: `url(${Side})` }}
        >

        </div>
        <div className='rightSide'>
            <h1>Contact Us</h1>
            <form className='contact-form' method='POST'>
                <label htmlFor='name'>Full Name</label>
                <input name='name' placeholder='Enter Full Name..' type='text' />
                <label htmlFor='email'>Email</label>
                <input name='email' placeholder='Enter email..' type='email' />
                <label htmlFor='message'>Message</label>
                <textarea rows='6' placeholder='Enter message' name='message' required></textarea>
                <button type='submit' >Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact

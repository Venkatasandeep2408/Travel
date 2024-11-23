import React from 'react'
import Goa from '../assets/Rajahmundry.jpg'
import '../styles/About.css';

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{ backgroundImage: `url(${Goa})`,}}>
        </div>
        <div className='aboutBottom'>
            <h1>ABOUT US</h1>
            <p>To sum it up, exploring the ancient ruins around Chopta, Uttarakhand means stepping into history and spirituality. From the tranquil banks of Deoria Tal to the ethereal heights of Rudranath Temple, each place offers an exclusive viewpoint on this area's rich cultural heritage and architectural wonders. Whether you are passionate about history or your search for spiritual fulfillment has brought you here or you are just another traveler looking out for new experiences, these ancient ruins once again ask to be seen in order to experience what it feels like living in such an exotic Himalayan atmosphere.
            </p>
        </div>
    </div>
  )
}

export default About

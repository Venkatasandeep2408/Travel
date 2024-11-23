import React from 'react';
import {Link} from 'react-router-dom';
import BannerImage from '../assets/banner.jpg';
import '../styles/Home.css'

export default function Home() {
  return (
    <>
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className='headerContainer' >
        <h2 className='bannertext1'>Explore India with Our Package</h2>
        <h1 className='bannertext2'>Explore India, Festivals</h1>
        <h1 className='bannertext2'>&amp; Culture</h1>
        <Link to="/menu">
        <button>ORDER NOW</button>
        </Link>
      </div>
    </div>

    
    </>
  )
}

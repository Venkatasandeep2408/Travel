import React,{useState} from 'react'
import Logo from '../assets/logo.png'
import {Link} from 'react-router-dom';
import '../styles/Navbar.css'

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false)
    
    const toggleNavbar=()=>{
        setOpenLinks(!openLinks);
    }
    return (
    <div className='navbar'> 
      <div className='leftSide' id={openLinks ? "open" : "close"}>
        <img src={Logo} alt='LOGO'/>
        <div className='hiddenLinks'>
        <Link to="/">HOME</Link>
        <Link to="/places">PLACES</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
        </div>
      </div>
      <div className='rightSide'>
        <Link to="/">HOME</Link>
        <Link to="/places">PLACES</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
        <button onClick={toggleNavbar}>
        <i class="fa-solid fa-bars"></i>
        </button>
      </div>
    </div>
  )
}

export default Navbar

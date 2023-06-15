import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import '../Styles/Navbar.css';
import logo from '../Assets/logo.png'
import ReorderIcon from '@mui/icons-material/Reorder';


const Navbar = () => {
  const [expandNavbar,setExpandNavbar] = useState(false);
  const location = useLocation();
  useEffect(()=>{
      setExpandNavbar(false)
  },[location])
  return (
    <div className='navbar' id={expandNavbar ? "open" : "close"}>
    <div className='logo'>
        <img src={logo} alt='Logo' />
      </div>
      <div className='toggleButton'>
      <button onClick={() => {setExpandNavbar((prev) => !prev)}}>
      <ReorderIcon />
      </button>
      </div>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About us</Link>
        <Link to='/events'>Events</Link>
        <Link to='/sponsors'>Sponsors</Link>
        <Link to='/team'>Team</Link>
        <Link to='/contact'>Contact</Link>
      </div>
      {/* <div className='logo'>
        <InstagramIcon className='icon' style={{ color: '#C32AA3' }} />
        <LinkedInIcon className='icon' style={{ color: '#0077B5' }} />
        <FacebookIcon className='icon' style={{ color: '#1877F2' }} />
      </div> */}
    </div>
  );
};

export default Navbar;

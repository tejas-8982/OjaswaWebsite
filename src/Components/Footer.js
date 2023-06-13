import React from 'react'
import '../Styles/Footer.css';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
  return (

    <footer class='footer'>
   <div class='container'>
   <div class='row '>
   <div class='footer-col'>
       
         <h3 style={{textalign: 'center'}}>Ojaswa</h3>
         <p>The official personality development club of S.G.S.I.TS Indore.</p>
         <p style={{textalign: 'center'}}>Made with <FavoriteIcon />  by <a href="/web_team/"> Web-Team </a></p>
        <p style={{textalign: 'center'}}>© <span id="Auto_Year">2023</span> Club Ojaswa. All Rights Reserved.</p> 

     
           </div>

           <div class='footer-col'>
           <h4>Address</h4>
           <div class="content">
  <div class="place">
  <LocationOnIcon /> 23 Sir M. Visvesvaraya Marg,<br/>
       Indore, Madhya Pradesh 452003<br/>
    
  </div>
  <div class="phone">
       <PhoneAndroidIcon /> +91XXXXXXXXX 
  </div>
  <div class="social">
         <InstagramIcon className='icon' style={{ color: '#C32AA3'}} />
        <LinkedInIcon className='icon' style={{ color: '#0077B5' }} />
        <FacebookIcon className='icon' style={{ color: '#1877F2' }} />
         </div>
 </div>
           </div>

           <div class='footer-col'>
           <h4>Useful Links</h4>
           <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Sponsors</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Contact</a></li>
           </ul>
           </div>

</div>
   </div>

    </footer>

  )
};
   
  
export default Footer;
import React from 'react'
import Content from '../Components/Content'
import "../Styles/Aboutus.css";
import Gallery from '../Components/Gallery'
const Home = () => {
  return (
    <div>
      <Content />
      <div className='about'>
      <h1>About us</h1>
      <p>
      Club Ojaswa, the official personality development club of SGSITS, believes that personal growth and development are the keys to unlocking your full potential. Our club is dedicated to empowering individuals like you to enhance your personality, develop essential life skills, and cultivate a positive mindset.
Founded with a vision of enhancing personality and nurturing humanity, Club Ojaswa has been a beacon of inspiration for many years. Over the years, we have transformed the lives of numerous individuals by providing a platform for personal and professional growth.
We further aim to foster new mindsets and re-shape them into better ethos.
      </p>
      </div>
      <div className='gallery'>
 
      <Gallery/>
      
      </div>
    </div>
  )
}

export default Home

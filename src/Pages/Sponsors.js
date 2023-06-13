import React from 'react'

import '../Styles/Sponsor.css';
import Sponsoritem from '../Components/Sponsoritem';
import {  SponsorList } from '../Helper/SponsorList';
const Sponsors = () => {
  return (
    <div className='Sponsors'>
      <h1>Event Sponsors</h1>
      <div className='sponsorList'>
      { SponsorList.map((sponsor)=>{
        return <Sponsoritem name={sponsor.name} image={sponsor.image} eventname={sponsor.eventname}/>
      })}
      </div>
    </div>
  )
}

export default Sponsors

import React from 'react'
import '../Styles/Sponsor.css';
function Sponsoritem({image,name,eventname}) {
  return (
    <div className='Sponsors'>
      <div style={{backgroundImage:`url(${image})`}} className='sponsor-Image'/>
      <h3 className='sname'>{name}</h3>
      <h3></h3>
    </div>
  )
}

export default Sponsoritem

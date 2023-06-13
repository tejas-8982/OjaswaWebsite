import React from 'react'
import '../Styles/Eventitems.css';
function Eventitems({image,name}) {
  return (
    <div className='EventItem'>
      <div style={{backgroundImage:`url(${image})`}} className="bgImage" />
      <h1>{ name }</h1>
      <button>View Event </button>
    </div>
  )
}

export default Eventitems

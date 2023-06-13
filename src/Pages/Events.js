import React from 'react'
import { EventList } from '../Helper/EventList'
import Eventitems from '../Components/Eventitems'
import '../Styles/Eventitems.css';
const Events = () => {
  return (
    <div className='Events'>
    <h1 className='EventTitle '>EVENTS</h1>
      <div className='EventList'>
      {EventList.map((events)=>{
        return <Eventitems name={events.name} image={events.image}/>
      })}
      </div>
    </div>
  )
}

export default Events

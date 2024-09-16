import React, { useState } from 'react';
import './por.css';
import photo1 from './3.png'
import photo2 from './4.png'
import photo3 from './5.png'


  
const Por = () => {

  return (
    <div className='edu1'>
       <h1 className='head'>Positions Of Responsibility</h1>
        <div className='grid'>
      <div className="block"  >
     <img src={photo3} className="image"/>
     <br/>
     <hr className='rule'/>
     <h3>Core Member and Contributor</h3>
     <h4>'DevC' Web Development Club 
</h4>
     <h5>IIIT Bhagalpur</h5>
     <h5>2023-24</h5>
      </div>
      <div className="block">
     <img src={photo2} className="image"/>
     <br/>
     <hr className='rule'/>
     <h3>Event Manager and Lead</h3>
     <h4>EBSB Board
</h4>
     <h5>IIIT Bhagalpur</h5>
     <h5>2023-24</h5>
      </div>
      <div className="block">
     <img src={photo1} className="image"/>
     <br/>
     <hr className='rule'/>
     <h3>Club Secretary</h3>
     <h4>'Samwaad' Literature Club</h4>
     <h5>IIIT Bhagalpur</h5>
     <h5>2024-25</h5>
      </div>
     
      </div>
        </div>
  )
}

export default Por
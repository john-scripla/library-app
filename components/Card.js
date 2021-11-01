import React from 'react'
import DetailsModal from './DetailsModal';
import Backdrop from './backdrop';
import { useState } from 'react';

const Card = (props) => {

    const [showModal, setShowModal] = useState(false);

  

    return (
        
    <div className="box_container">
    <div className="one">
     <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/203277/oatmeal.jpg" alt="Chai Oatmeal" />
     <h1>{props.h1}</h1>
     <h3>{props.h3}</h3>

        <button className='btn'onClick={()=> setShowModal(true)}>Details</button>
        <button className='btn'>Price</button>


        {showModal && <DetailsModal onClick={() => setShowModal(false)}/>} 
        {showModal && <Backdrop onClick={()=> setShowModal(false)} /> } 

        
 </div>
 </div>


    )
}

export default Card;


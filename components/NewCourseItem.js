import React from 'react'

 const NewCourseItem = (props) => {
    return (
        <div className='one'>
             <img src={props.image} alt =""/>
             <h3>{props.title}</h3>
            <p>{props.author}</p>
            <p>{props.description}</p>
        </div>
    )
}

export default NewCourseItem;

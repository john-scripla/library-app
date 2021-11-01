import React from 'react'
import {Link} from 'react-router-dom'



 const DetailsModal = (props) => {


    return (
        <div className="modal">
            <p> These are all the details about this course</p>
                <button className ="btn"onClick={props.onClick}> Close </button>
                <Link to="/newcourse"><button className="btn">Create New course</button></Link>
            
        </div>
    )
}

export default DetailsModal;

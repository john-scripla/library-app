import React from 'react'
import Card from './Card';



export const Courses = () => {
    return (
      
        <div className = "courses">
            <Card h1="Course 1" h3="John Doe"/>
            <Card h1="Course 2" h3="John Smith"/>
            <Card h1="Course 3" h3="John Brown"/>
            <Card h1="Course 4" h3="John Johnson"/>
            <Card h1="Course 5" h3="John Claude" />
            <Card h1="Course 6" h3="John White"/> 

        </div>
    )
}

export default Courses;
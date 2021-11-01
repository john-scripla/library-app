import React from 'react'
import NewCourseItem from '../components/NewCourseItem';

const CourseList = (props) => {
    return (
        <div>
            {props.courses.map(course=> ( 
            
            <NewCourseItem 
            
            key={course.id} 
            image={course.image}
            title = {course.title}
            author = {course.author}
            description = {course.description}    
            
            />
            ))}
        </div>
    )
}

export default CourseList;
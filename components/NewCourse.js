import React from 'react'
import { NewCourseForm } from './NewCourseForm'

export const NewCourse = (props) => {

    function addCourseHandler(newCourseData) {


        fetch('https://courses-3764d-default-rtdb.firebaseio.com/courses.json',
        {
            method: 'POST',
            body: JSON.stringify(newCourseData),
            headers: {
                'Content-type':'application/json'
            }
        }
        );




    }
    return (
        <div>
            <NewCourseForm onAddCourse={addCourseHandler }/>
        </div>
    )
}

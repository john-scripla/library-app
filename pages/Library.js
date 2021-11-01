import React from 'react'
import Header from '../components/Header';
import Courses from '../components/Courses';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import { useState } from 'react';
import Categories from '../components/Categories';
import CourseList from '../components/CourseList' 


 const Library = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [loadedCourses, setLoadedCourses] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://courses-3764d-default-rtdb.firebaseio.com/courses.json'
     ).then(response => {

        return response.json();

     }).then(data => {

        const courses = [];

        for (const key in data) {
            const course ={

                id: key,
                ...data[key]

            };

            courses.push(course)
        }

        setIsLoading(false);
        setLoadedCourses(courses);
        

     });
        return () => {
            
        }
    }, [])

  

     if (isLoading) {
         return <section><p>Loading</p></section>
     }

    

    return (
        <container className='container'>
        <Header />
        <Categories />
        <Courses />
        <CourseList courses={loadedCourses}/>
        <Footer />
        
        </container>


        
    )
}

export default Library;



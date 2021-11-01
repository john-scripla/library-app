import React from 'react'
import {useRef} from 'react'
import {Link} from 'react-router-dom'

export const NewCourseForm = (props) => {

    const imageInputRef = useRef();
     const titleInputRef = useRef();
      const authorInputRef = useRef();
       const descriptionInputRef = useRef();



    function submitHandler(e) {
        e.preventDefault();

        const enterredImage = imageInputRef.current.value;
        const enterredTitle = titleInputRef.current.value;
        const enterredAuthor = authorInputRef.current.value;
        const enterredDescription = descriptionInputRef.current.value;

        const newCourseData = {
            image: enterredImage,
            title: enterredTitle,
            author: enterredAuthor,
            description: enterredDescription,
        };

        alert('from was submitted')

props.onAddCourse(newCourseData);

    }


    return (
   
            <form className="form" onSubmit={submitHandler}>
           
                <div className='form-inner'>
                <header>New Course Information</header>
                <div className= 'form-group'>
                    <label htmlFor='image'>Image: (URL)</label>
                    <input type='url, file' required id='image' ref={imageInputRef}></input>
                </div>
                <div className= 'form-group'>
                    <label htmlFor='title'>Title:</label>
                    <input type='text' required id='title' ref={titleInputRef}></input>
                </div>
                 <div className= 'form-group'>
                    <label htmlFor='author'>Author:</label>
                    <input type='text' required id='author' ref={authorInputRef}></input>
                </div>
                  <div className= 'form-group'>
                    <label htmlFor='description'>Description:</label>
                    <input type='description' required id='description' ref={descriptionInputRef}></input>
                </div>
                <div>
                    <button className="btn">Create new course</button>
                </div>
                <br></br>
                <div>
                    <Link to='/library'><button className="btn">Back to library</button></Link>
                </div>
            </div>
            </form>
    
    )
}

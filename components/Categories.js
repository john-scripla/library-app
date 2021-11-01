import React from 'react'

 const Categories = () => {
    return (
        <div className='categories'>
            <label htmlFor="dropdown questions">Category</label>
                        <br></br>
                        <select>
                        <option value=""></option>  
                        <option value="option 1"></option>
                        <option value="option 2">Option 2</option>
                        </select>
        </div>
    )
}

export default Categories

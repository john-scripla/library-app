import React, {useState} from 'react'
import logo from '../images/logo.jpg';
import coursla_background from '../images/coursla_background.jpg';
import {Link} from 'react-router-dom'


export default function LoginForm({Login, error}) {

    const [details, setDetails] = useState({name:"", email:"", password:""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    return (
        <form className='form' onSubmit={submitHandler}>
            <div className="form-inner">
                <img src={logo} alt="coursla logo"/>
                {(error != "") ? (<div className="error">{error}</div>) : ""}
                <div className="form-group">
                    <label htmlFor="name"> Name:</label>
                    <input type="text" name="name" id="name" onChange=
                    {e => setDetails({...details, name: e.target.value})} value ={details.name}/>
                </div>
                 <div className="form-group">
                    <label htmlFor="email"> Email:</label>
                    <input type="email" name="email" id="email"  onChange=
                    {e => setDetails({...details, email: e.target.value})} value ={details.email}/>
                </div>
                 <div className="form-group">
                    <label htmlFor="password"> Password:</label>
                    <input type="password" name="password" id="password"  onChange=
                    {e => setDetails({...details, password: e.target.value})} value ={details.password}/>
                </div>
                <div className="form-group">
                <label htmlFor="dropdown questions">Dropdown questions?</label>
                        <br></br>
                        <select>
                        <option value=""></option>  
                        <option value="option 1"></option>
                        <option value="option 2">Option 2</option>
                        </select>
                </div>
                <input type="submit" value="LOGIN"/>
                <div className='btn'>
                    <Link to="/library">
                        <button>To Library</button>
                    </Link>
                </div>
            
                
            </div>
            
        </form>
    )
}

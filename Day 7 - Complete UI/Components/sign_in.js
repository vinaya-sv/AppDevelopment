import React, { useContext, useState } from 'react';
import './css/sign_in.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login ,logout} from './features/reducer';
import Home from './home';
import { MyContext } from './context/context';
function SignIn(){
    const dispatch=useDispatch();
    const {value, updateValue}=useContext(MyContext);
    
    const navigate=useNavigate();
    const [username,setusername]=useState("");
    const [password,setpassword]=useState("");

    const handleSubmit = () => {
        updateValue(username);
        
    }

    return(
        // <div className="sign-in-outer">
            <div className="sign-in-card">
                <form onSubmit={()=>navigate("/home")}>
                <h1 className="sign-in-label">Sign In</h1>
                <div className="input-field-area">
                    <input className="input-field" value={username} onChange={e=>setusername(e.target.value)} type="text" placeholder="Enter your username" required autoComplete='off'></input>
                    <input className="input-field" value={password} onChange={e=>setpassword(e.target.value)} type="password" placeholder="Enter your password" required autoComplete='off'></input>
                </div>
                <button onClick={()=>{dispatch(login({username,password}))}}
                /*onClick={handleSubmit}*/ className="submit-button" type="submit"><b>Submit</b></button>
                <Link to="/signup"><p className="text">Don't have an account? Sign up</p></Link>
                </form>
            </div>
        // </div>
    ); 
}
export default SignIn;
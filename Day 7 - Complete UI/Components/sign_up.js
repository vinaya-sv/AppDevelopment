import React from 'react';
import { useState } from 'react';
import './css/sign_up.css';
import { Link, useNavigate } from 'react-router-dom';
// import {GrValidate} from 'react-icons/gr';
function SignUp(){
    const initValues={username:"",emailid:"",password:"",confirmpassword:"",date:""};
    const [formValues, setFormValues]=useState(initValues);
    const [errors,setError]=useState("Please enter all details");
    const [displayPop,setDisplayPop]=useState(true);
    
    const validate=(formValues)=>{
        var error="";
        console.log(formValues.password+" "+formValues.confirmpassword)
        const userReg=new RegExp("[A-Za-z0-9]");
        const pwdReg=new RegExp("[A-Z][A-Za-z0-9]+[!@#$%^&*]+");
        if(!formValues.username)
            error="Username is required";
        else if(formValues.username.length<5)
            error="Username should not be less than 5 characters";
        else if(!userReg.test(formValues.username))
            error="Username must only contain alphabets and numbers";
        else if(!formValues.emailid)
            error="Email is required";
        else if(!formValues.password)
            error="Password is required";
        else if(formValues.password.length<5)
            error="Password should not be less than 5 characters";
        else if(!pwdReg.test(formValues.password))
            error="Password must contain uppercase letter, lowercase letter, special character (!,@,#,$,%,^,&,*)";
        else if(String(formValues.password).valueOf()!=String(formValues.confirmpassword).valueOf())
            error="Password does not match";
        else    
            error="";
        return error;
    }
    
    const handleSubmit=()=>{

        // setError(validate(formValues));
        // if(errors==="")
        // navigate1("/signin");
    };
    
    const handleChange=(e)=>{
        const {id,value}=e.target;
        setFormValues({...formValues, [id]:value});
        handleSubmit();
    }
    const navigate1=useNavigate();

    return(
        <div className="sign-up-outer">
            <div className="sign-up-card">
                {/* {errors} */}
                {/* {formValues.password}
                {formValues.confirmpassword} */}
                <form onSubmit={()=>handleSubmit}>
                <h1 className="sign-up-label">Sign Up</h1>
                <div className="input-field-area">
                    <input className="input-field" id="username" type="text" placeholder="Name" required autoComplete='off' onChange={handleChange}></input>
                    <input className="input-field" id="emailid" type="email" placeholder="Email-id" required autoComplete='off' onChange={handleChange}></input>
                    <input className="input-field" id="password" type="text" placeholder="Password" required autoComplete='off' onChange={handleChange}></input>
                    <input className="input-field" id="confirmpassword" type="password" placeholder="Confirm password" required autoComplete='off' onChange={handleChange}></input>
                    <input className="input-field" id="date" type="date" placeholder="Date of Birth" size='lg' required autoComplete='off' onChange={handleChange}></input>
                </div>
                <button className="submit-button" type="submit" disabled onClick={handleSubmit}><b>Submit</b></button>
                <Link to="/"><p className="text">Already have an account? Sign in</p></Link>
                </form>
            </div>
                <div className="error" style={{display:(errors.length==0)?"none":"block"}}>{errors}</div>
        </div>
    );
}
export default SignUp;
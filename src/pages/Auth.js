import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useForm} from '../customhooks/useForm'
import {loginvalidator} from '../validator/formvalidator'
const Auth = () =>{
    const [formstate, handleonchange] = useForm([]);
    const dispatch = useDispatch();
    const [formerror, formisvalid] = loginvalidator(formstate);
    const handlelogin = async (e) =>{
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/user/login', {
            method: 'POST',
            body: JSON.stringify(formstate),
            headers: {'Content-Type': 'application/json'},
        });

        const responsedata = await response.json();
        console.log(responsedata);
        
        dispatch(
            {
                type: 'login',
                user: responsedata.user,
                islogin: true,
            }
        );
        
    }
    return(
        
            <>
            <br />
            <br />
            <br />

            <form style={{marginLeft:'30%', marginRight:'30%'}}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input type="text" name="username" className="form-control" onChange={handleonchange} />
          { !formisvalid
            && <div id="emailHelp" className="form-text">{formerror.username}</div>}
        </div>
        <button onClick={handlelogin} type="submit" style={{marginRight: '5%'}} className="btn btn-primary">Login</button>
      </form>

            </>
        
    )
    
}

export default Auth;
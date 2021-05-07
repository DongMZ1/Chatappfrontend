import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useForm} from '../customhooks/useForm'
import {loginvalidator} from '../validator/formvalidator'
const Auth = () =>{
    const [formstate, handleonchange] = useForm([]);
    const dispatch = useDispatch();
    const [formerror, formisvalid] = loginvalidator(formstate);
    const handlelogin = async () =>{
        
        const response = await fetch('https://localhost:5000/api/user/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify({username: formstate.username})
        });

        const responsedata = await response.json();
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

            <div style={{marginLeft:'30%', marginRight:'30%'}}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input type="text" name="username" className="form-control" onChange={handleonchange} />
          { !formisvalid
            && <div id="emailHelp" className="form-text">{formerror.username}</div>}
        </div>
        <button onClick={handlelogin} style={{marginRight: '5%'}} className="btn btn-primary">Login</button>
      </div>

            </>
        
    )
    
}

export default Auth;
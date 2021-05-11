import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useForm} from '../customhooks/useForm'
import {loginvalidator} from '../validator/formvalidator'
const Auth = () =>{
    const [formstate, handleonchange] = useForm([]);
    const dispatch = useDispatch();
    const [formerror, formisvalid] = loginvalidator(formstate);
    const [showserverstart, setshowserverstart] = useState(false);
    const handlelogin = async (e) =>{
        e.preventDefault();
        setshowserverstart(true);
        let response
        while(!response) {
        response = await fetch('https://chatappclonebackend.herokuapp.com/api/user/login', {
            method: 'POST',
            body: JSON.stringify(formstate),
            headers: {'Content-Type': 'application/json'},
        });
      }
      setshowserverstart(false);
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

            <form style={{marginLeft:'30%', marginRight:'30%'}}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input type="text" name="username" className="form-control" onChange={handleonchange} />
          { !formisvalid
            && <div id="emailHelp" className="form-text">{formerror.username}</div>}
        </div>
        <button disabled={!formisvalid} onClick={handlelogin} type="submit" style={{marginRight: '5%'}} className="btn btn-primary">Login</button>
      </form>
             <br />
             <br />
             <h2 style={{marginLeft:'20%'}}>{showserverstart && 'server is starting.... please wait a second'}</h2>

            </>
        
    )
    
}

export default Auth;
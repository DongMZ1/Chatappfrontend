import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useForm} from '../customhooks/useForm'
import {loginvalidator} from '../validator/formvalidator'
const Userloginpage = ({loginorsignup}) =>{
    const [formstate, handleonchange] = useForm([]);
    const dispatch = useDispatch();
    const [formerror, formisvalid] = loginvalidator(formstate);
    const handlelogin = () =>{
        dispatch(
            {
                type: 'login',
                islogin: true
            }
        )
    }
    return(
        
            <>
            <br />
            <br />
            <br />

            <form style={{marginLeft:'30%', marginRight:'30%'}}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleonchange} />
          { !formisvalid
            && <div id="emailHelp" className="form-text">{formerror.email}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" name="password" className="form-control" id="exampleInputPassword1" onChange={handleonchange} />
          { !formisvalid
            && <div className="form-text">{formerror.password}</div>}
        </div>
        <button onClick={handlelogin} style={{marginRight: '5%'}} type="submit" className="btn btn-primary">Login</button>
        <button className="btn btn-primary">Do not have an account ? Sign up</button>
      </form>

            </>
        
    )
    
}

export default Userloginpage;
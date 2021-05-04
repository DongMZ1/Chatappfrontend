import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useForm} from '../customhooks/useForm'
import {signupvalidator} from '../validator/formvalidator'
const Usersignuppage = ({loginorsignup, setloginorsignup}) =>{

    const [formstate, handleonchange] = useForm([]);
    const dispatch = useDispatch();
    const [formerror, formisvalid] = signupvalidator(formstate);
    const handlesignup = () =>{
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
          <label className="form-label">User Name</label>
          <input type="text" name="username" className="form-control" aria-describedby="emailHelp" onChange={handleonchange} />
          { !formisvalid
            && <div id="emailHelp" className="form-text">{formerror.username}</div>}
        </div>
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
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Please repeat same password</label>
          <input type="password" name="password1" className="form-control" id="exampleInputPassword1" onChange={handleonchange} />
          { !formisvalid
            && <div className="form-text">{formerror.password}</div>}
        </div>
        <button onClick={handlesignup} style={{marginRight: '5%'}} type="submit" className="btn btn-primary">signup</button>
        <button onClick={() => setloginorsignup(true)} className="btn btn-primary">Already have an account ? Login</button>
      </form>

            </>
        
    )
    
}

export default Usersignuppage;
import React from 'react'
import {useForm} from '../customhooks/useForm'
const Userloginpage = ({loginorsignup}) =>{
    const [formstate, handleonchange] = useForm([]);

    return(
        
            <>

            <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleonchange} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" name="password" className="form-control" id="exampleInputPassword1" onChange={handleonchange} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      {JSON.stringify(formstate)}

            </>
        
    )
    
}

export default Userloginpage;
import React, {useState} from 'react'
import Userloginpage from './Userloginpage'
import Usersignuppage from './Usersignuppage'
const Auth = () =>{
     const [loginorsignup, setloginorsignup] = useState(true);

    return(
        <>
         {/*if loginorsignup is true, login page else signup page */}
         {loginorsignup? 
         
         <Userloginpage loginorsignup={loginorsignup} setloginorsignup={setloginorsignup} />
         
         : 
         
        <Usersignuppage loginorsignup={loginorsignup} setloginorsignup={setloginorsignup} />}
        </>
    )
    
}

export default Auth;
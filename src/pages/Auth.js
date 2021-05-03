import React, {useState} from 'react'
import Userloginpage from './Userloginpage'
import Usersignuppage from './Usersignuppage'
const Auth = () =>{
     const loginorsignup = useState(true);

    return(
        <>
         {/*if loginorsignup is true, login page else signup page */}
         {loginorsignup? 
         
         <Userloginpage loginorsignup={loginorsignup} />
         
         : 
         
         <Usersignuppage loginorsignup={loginorsignup} />}
        </>
    )
    
}

export default Auth;
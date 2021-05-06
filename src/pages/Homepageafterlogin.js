import react, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {io} from "socket.io-client";
import {Button} from 'react-bootstrap'
import Sidebar from '../components/Sidebar'

const Homepageafterlogin = () =>{
    const [message, setmessage] = useState();
    const dispatch = useDispatch();
    const socket = io('localhost:5000');
    useEffect( () =>{
        socket.on("message", data => {
          setmessage(data);
        });
      
      }
        )
    
        const sendmessage = () =>{
            socket.emit('message', 'frontend works');
          }

   return(
   <>
   <Sidebar />
   </>
   )
}

export default Homepageafterlogin;
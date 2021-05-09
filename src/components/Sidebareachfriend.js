import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'

const Sidebareachfriend = ({setroom, room, friendname, setselecteduser, selecteduser, setselectedusermessages, joinroom}) =>{
    const username = useSelector(state => state.loginstate.user.username);
    const selectcurrentfriend = async () =>{
        setselecteduser(friendname);
        setroom(room);
        console.log(username);
        //need to init message by fetch
        
        const response = await fetch(
          'http://localhost:5000/api/user/conversationhistory',{
            method: 'POST',
            body: JSON.stringify({
              username,
              friendname
            }),
            headers: {'Content-Type' : 'application/json'}
          }
        )
        const responsedata = await response.json();

        setselectedusermessages(responsedata.history);
        
        joinroom();
    }
    return <>
       <button style={{width:'100%'}} onClick={selectcurrentfriend} className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">{friendname}</div>
    </div>
    {friendname === selecteduser && <span className="badge bg-primary rounded-pill">Selected</span>}
       </button>
    </>
}

export default Sidebareachfriend;
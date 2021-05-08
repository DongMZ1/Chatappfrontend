import React, {useEffect} from 'react'

const Sidebareachfriend = ({setroom, room, username, setselecteduser, selecteduser, setselectedusermessages}) =>{

    const selectcurrentfriend = () =>{
        setselecteduser(username);
        setroom(room);
        //need to init message by fetch
        setselectedusermessages([]);
    }
    return <>
       <button style={{width:'100%'}} onClick={selectcurrentfriend} className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">{username}</div>
    </div>
    {username === selecteduser && <span className="badge bg-primary rounded-pill">Selected</span>}
       </button>
    </>
}

export default Sidebareachfriend;
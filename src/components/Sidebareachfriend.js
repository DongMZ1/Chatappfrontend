import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Sidebareachfriend = ({ setroom, room, friendname, setselecteduser, selecteduser, setselectedusermessages, joinroom, leaveroom }) => {
  const username = useSelector(state => state.loginstate.user.username);
  const selectcurrentfriend = async () => {
    //leave the previous room, then join the current room, since conversation is private, only one room at a time
    leaveroom();
    setselecteduser(friendname);
    setroom(room);
    joinroom(room);
    //init message by fetch
    const response = await fetch(
      'https://chatappclonebackend.herokuapp.com/api/user/conversationhistory', {
      method: 'POST',
      body: JSON.stringify({
        username,
        friendname
      }),
      headers: { 'Content-Type': 'application/json' }
    }
    )
    const responsedata = await response.json();

    setselectedusermessages(responsedata.history);

  }
  return <>
    <div onClick={selectcurrentfriend} className='disp-flex cursor-pointer space-between py-2 green-border-bottom'>
      <div className="me-2">
        <div className="font-14p bold grey-color py-1">{friendname}</div>
      </div>
      {friendname === selecteduser && <div className="white-color font-12p bold rounder-border px-2 py-1 green-bg disp-flex"><div className='m-auto'>Selected</div></div>}
    </div>
  </>
}

export default Sidebareachfriend;
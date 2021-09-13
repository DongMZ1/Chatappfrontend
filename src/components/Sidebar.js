import React, { useState } from "react";
import { useSelector, useDispatch, useStore } from "react-redux";
import Addfriend from "../components/Addfriend";
import Sidebareachfriend from "./Sidebareachfriend";
import Managefriendrequest from "./Managefriendrequest";
import useInterval from 'use-interval'
const Sidebar = ({
  setselectedusermessages,
  setselecteduser,
  selecteduser,
  setroom,
  joinroom,
  leaveroom,
}) => {
  const [showaddfriend, setshowaddfriend] = useState(false);
  const [showmanagefriend, setshowmanagefriend] = useState(false);
  const dispatch = useDispatch();
  const username = useSelector(state => state.loginstate.user.username);
  const refreshpage = async () => {

    const response = await fetch('https://chatappclonebackend.herokuapp.com/api/user/login', {
      method: 'POST',
      body: JSON.stringify({
        username
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    const responsedata = await response.json();

    dispatch(
      {
        type: 'login',
        user: responsedata.user,
        islogin: true
      }
    );

  }

  useInterval(
    () => {
      refreshpage()
    }, [10000]
  )

  return (
    <>
      <Addfriend
        showaddfriend={showaddfriend}
        setshowaddfriend={setshowaddfriend}
      />
      <Managefriendrequest
        showmanagefriend={showmanagefriend}
        setshowmanagefriend={setshowmanagefriend}
      />
      <div className='disp-flex'>
      <div
        type="button"
        onClick={() => setshowaddfriend(true)}
        className="font-12p disp-flex bold px-2 py-1 green-color rounder-border green-border cursor-pointer"
      >
        <div className='m-auto'>Add Friends</div>
      </div>
      <div onClick={() => setshowmanagefriend(true)} className="font-12p disp-flex px-2 py-1 bold green-color rounder-border green-border cursor-pointer">
        <div className='m-auto'>Manage Friend Request</div>
      </div>
      </div>
      <div
      >
        {useSelector(state => state.loginstate.user.messages).map((conversation) => (
          <Sidebareachfriend
            leaveroom={leaveroom}
            joinroom={joinroom}
            setselectedusermessages={setselectedusermessages}
            setroom={setroom}
            room={conversation.room}
            setselecteduser={setselecteduser}
            selecteduser={selecteduser}
            friendname={conversation.friend}
          />
        ))}
      </div>
    </>
  );
};

export default Sidebar;

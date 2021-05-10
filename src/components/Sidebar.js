import React, { useState } from "react";
import { useSelector, useDispatch, useStore } from "react-redux";
import Addfriend from "../components/Addfriend";
import Sidebareachfriend from "./Sidebareachfriend";
import Managefriendrequest from "./Managefriendrequest";
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
  const refreshpage = async () =>{

    const response = await fetch('https://chatappclonebackend.herokuapp.com/api/user/login', {
      method: 'POST',
      body: JSON.stringify({
            username
      }),
      headers: {'Content-Type': 'application/json'},
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

      <button
        type="button"
        onClick={() => setshowaddfriend(true)}
        className="btn btn-outline-secondary"
      >
        Add Friends
      </button>
      <button onClick={()=>setshowmanagefriend(true)} className="btn btn-outline-secondary">
        Manage Friend Request
      </button>
      <button
        onClick={refreshpage}
        className="btn btn-outline-secondary"
      >Refresh page</button>
      <br />
      <br />
      <div
        style={{ height: "500px", overflow: "auto", border: "2px solid blue" }}
      >
        {/**------------------------container-------------------------------- */}
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

        {/**------------------------end of container-------------------------------- */}
      </div>
    </>
  );
};

export default Sidebar;

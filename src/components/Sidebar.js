import React, { useState } from "react";
import { useSelector, useDispatch, useStore } from "react-redux";
import Addfriend from "../components/Addfriend";
import Sidebareachfriend from "./Sidebareachfriend";
const Sidebar = ({setselectedusermessages, setselecteduser, selecteduser, setroom, joinroom, leaveroom }) => {
  const [showaddfriend, setshowaddfriend] = useState(false);
  const dispatch = useDispatch();
  const store = useStore().getState();
  return (
    <>
      <Addfriend
        showaddfriend={showaddfriend}
        setshowaddfriend={setshowaddfriend}
      />
      <button
        type="button"
        onClick={() => setshowaddfriend(true)}
        className="btn btn-outline-secondary"
      >
        Add Friends
      </button>
      <br />
      <br />
      <button
        type="button"
        className="btn btn-outline-secondary"
      >
        Manage Friend Request
      </button>
      <br />
      <br />
      <div
        style={{ height: "500px", overflow: "auto", border: "2px solid blue" }}
      >
        {/**------------------------container-------------------------------- */}
        {store.loginstate.user.messages.map((conversation) => (
          <Sidebareachfriend
            leaveroom={leaveroom}
            joinroom ={joinroom}
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

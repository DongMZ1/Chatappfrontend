import react, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { io } from "socket.io-client";
import { Button } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import Fixedfooterinput from "../components/Fixedfooterinput";
import Chatcontent from "../components/Chatcontent";

const Homepageafterlogin = () => {
  const [message, setmessage] = useState();
  /*the room of User.messages.room */
  const [room, setroom] = useState();
  /*input box message to send */
  const [messagetosend, setmessagetosend] = useState();
  /*the user selected for conversation */
  const [selecteduser, setselecteduser] = useState();
  /*the message history of user and selected friend */
  const [selectedusermessages, setselectedusermessages] = useState([]);
  const dispatch = useDispatch();
  const socket = io("localhost:5000");
  useEffect(() => {
    socket.on("message", (data) => {
      setmessage(data);
    });
  });

  return (
    <>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-2">
            <Sidebar
              selecteduser={selecteduser}
              setselecteduser={setselecteduser}
              setroom={setroom}
              setselectedusermessages={setselectedusermessages}
            />
          </div>
          <div className="col-10">
            <Chatcontent selecteduser={selecteduser} />
            <br />
            <Fixedfooterinput setmessagetosend={setmessagetosend} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepageafterlogin;

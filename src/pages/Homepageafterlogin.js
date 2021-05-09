import react, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { io } from "socket.io-client";
import { Button } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import Fixedfooterinput from "../components/Fixedfooterinput";
import Chatcontent from "../components/Chatcontent";


let socket;
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
  useEffect(()=>{
    socket = io("localhost:5000");
  }, []);
//once the user click the button of sidebar, then  automatically join the room which we set up earlier

  const joinroom = () =>{
    socket.emit('join_room', room);
  }

  const username = useSelector(state => state.loginstate.user.username);

  const sendcontenttoserver = async (e) =>{
    e.preventDefault();
    await socket.emit('message', {
      room: room,
      username: username,
      friendname: selecteduser,
      content: messagetosend
    });
    setselectedusermessages([...selectedusermessages, {
      whospeak: username,
      content: messagetosend,
    }]);
  }

  useEffect(() => {
    socket.on("receive_message", ({username, content}) => {
      setselectedusermessages([...selectedusermessages, {
        whospeak: username,
        content: content
      }]);
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
              joinroom={joinroom}
              selecteduser={selecteduser}
              setselecteduser={setselecteduser}
              setroom={setroom}
              setselectedusermessages={setselectedusermessages}
            />

          </div>
          <div className="col-10">
            <Chatcontent selecteduser={selecteduser} selectedusermessages={selectedusermessages} />
            <br />
            <Fixedfooterinput messagetosend={messagetosend} sendcontenttoserver={sendcontenttoserver} setmessagetosend={setmessagetosend} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepageafterlogin;

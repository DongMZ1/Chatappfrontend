import react, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { io } from "socket.io-client";
import { Button } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import Fixedfooterinput from "../components/Fixedfooterinput";
import Chatcontent from '../components/Chatcontent'

const Homepageafterlogin = () => {
  const [message, setmessage] = useState();
  const [messagetosend, setmessagetosend] = useState();
  const [selecteduser, setselecteduser] = useState();
  const dispatch = useDispatch();
  const socket = io("localhost:5000");
  const choosefriend = () =>{
      socket.emit('room', 1);
  }
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
          <Sidebar selecteduser={selecteduser} setselecteduser={setselecteduser} />
        </div>
        <div className="col-10">
          <Chatcontent />
          <br />
          <Fixedfooterinput setmessagetosend={setmessagetosend} />
        </div>
      </div>
      </div>
    </>
  );
};

export default Homepageafterlogin;

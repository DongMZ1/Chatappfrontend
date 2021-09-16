import react, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from 'react-bootstrap';
import { io } from "socket.io-client";
import { Button } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import Fixedfooterinput from "../components/Fixedfooterinput";
import Chatcontent from "../components/Chatcontent";


let socket;
const Homepageafterlogin = () => {
  /*the room of User.messages.room */
  const [room, setroom] = useState();
  /*input box message to send */
  const [messagetosend, setmessagetosend] = useState();
  /*the user selected for conversation */
  const [selecteduser, setselecteduser] = useState();
  /*the message history of user and selected friend */
  const [selectedusermessages, setselectedusermessages] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    socket = io("https://chatappclonebackend.herokuapp.com");
  }, []);
  //once the user click the button of sidebar, then  automatically join the room which we set up earlier

  const joinroom = (roomnumber) => {
    socket.emit('join_room', roomnumber);
  }

  const leaveroom = () => {
    socket.emit('leave_room', room);
  }

  const username = useSelector(state => state.loginstate.user.username);

  const sendcontenttoserver = async (e) => {
    e.preventDefault();
    if (messagetosend) {
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
      setmessagetosend('');
    }
  }

  // socket io on will not refresh component, pass a method to it
  const receivecontentfromserver = (username, content) => {
    setselectedusermessages(state => [...state, {
      whospeak: username,
      content: content
    }]);
  }

  useEffect(() => {
    socket.on("receive_message", ({ username, content }) => {
      receivecontentfromserver(username, content);
      console.log(JSON.stringify({
        whospeak: username,
        content: content
      }));
    });
  }, []);

  const logout = () => {
    dispatch({
      type: 'login',
      islogin: false,
      user: null
    });
  }
  return (
    <>
      <br />
      <div className="container">
        <div className='disp-flex space-between mb-4'>
          <div className='font-16p bold green-color'>Log in as {username}</div> <div className='font-16p bold white-color green-bg rounder-border cursor-pointer py-1 px-2' onClick={logout} >Log out</div>
        </div>
        <Row>
          <Col xl={3}>

            <Sidebar
              leaveroom={leaveroom}
              joinroom={joinroom}
              selecteduser={selecteduser}
              setselecteduser={setselecteduser}
              setroom={setroom}
              setselectedusermessages={setselectedusermessages}
            />

          </Col>
          <Col xl={9}>
            <Chatcontent selecteduser={selecteduser} selectedusermessages={selectedusermessages} />
            <br />
            <Fixedfooterinput messagetosend={messagetosend} sendcontenttoserver={sendcontenttoserver} setmessagetosend={setmessagetosend} />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Homepageafterlogin;

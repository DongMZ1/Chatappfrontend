import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import useInterval from "use-interval";



const Addfriend = ({ showaddfriend, setshowaddfriend }) => {
  const dispatch = useDispatch();
  const [keyword, setkeyword] = useState();
  const [allusers, setallusers] = useState([]);
  const [userfilter, setuserfilter] = useState([]);
  const currentusername = useSelector((state) => state.loginstate.user.username);

  const refreshallusers = async () => {
    const response = await fetch(
      "https://chatappclonebackend.herokuapp.com/api/user/possiblefriends",
      {
        method: "POST",
        body: JSON.stringify({
          username: currentusername,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const responsedata = await response.json();
    setallusers(responsedata.allusernames);
  }

  useInterval(
    () => refreshallusers(), 10000
  );


  //if user try to search, then update all userlist to avoid that some new user appear after loading the component
  useEffect(() => {
    const updateuserlist = async () => {
      const response = await fetch(
        "https://chatappclonebackend.herokuapp.com/api/user/possiblefriends",
        {
          method: "POST",
          body: JSON.stringify({
            username: currentusername,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const responsedata = await response.json();
      setallusers(responsedata.allusernames);
    };
    updateuserlist();
  }, []);
  //end --- if user try to search, then update all userlist to avoid that some new user appear after loading the component

  //in the first rendering, show all possible user on the screen, 
  //else if all users changed meaning there are new people register

  useEffect(() => {
    setuserfilter(allusers);
  }, [allusers]);

  //END ---- in the first rendering, show all possible user on the screen, 
  //else if all users changed meaning there are new people register
  const filteruserlist = (e) => {
    let filtered = allusers.filter(eachuser => {
      return eachuser.toLowerCase().match(e.target.value);
    });

    setuserfilter(filtered);

  };
  return (
    <>
      <Modal
        size="lg"
        show={showaddfriend}
        onHide={() => setshowaddfriend(false)}
        className='rounder-border'
      >
        <Modal.Body>
          <div className='disp-flex space-between mb-3'>
            <input
              type="text"
              className='font-14p'
              placeholder="Search"
              onChange={(e) => filteruserlist(e)}
            />
            <div onClick={() => setshowaddfriend(false)} className='user-select-none cursor-pointer green-bg disp-flex rounder-border white-color font-14p px-3 bold'>
              <div className='m-auto'>
                Close
              </div>
            </div>
          </div>
          <div className='height-80vh overflow-auto pt-1'>
            {userfilter.map(eachusername => {
              return <Eachusercard eachusername={eachusername} />
                ;
            }
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

const Eachusercard = ({ eachusername }) => {
  const [show, setshow] = useState(false);
  const [message, setmessage] = useState();
  const currentusername = useSelector((state) => state.loginstate.user.username);

  const sendfriendrequest = async () => {
    const response = await fetch(
      'https://chatappclonebackend.herokuapp.com/api/user/requestfriend', {
      method: 'POST',
      body: JSON.stringify(
        {
          username: currentusername,
          friendname: eachusername
        }
      ),
      headers: { 'Content-Type': 'application/json' }
    }
    )

    const responsedata = await response.json();

    if (response.ok) {
      setshow(true);
      setmessage('Friend Request is sent successfully');
    }

    if (!response.ok) {
      setshow(true);
      setmessage(responsedata.message)
    }
  }
  return <div className='mb-3 green-border-bottom'>
        <div className='disp-flex space-between'><div className='font-14p green-color bold'>{eachusername}</div> <div className='green-border font-12p py-1 bold white-bg px-2 green-color rounder-border cursor-pointer user-select-none' onClick={sendfriendrequest}>Send Friend Request</div></div>
        {show && <div className='font-12p red-color bold'>
          {message}
        </div>
        }
    </div>
}

export default Addfriend;

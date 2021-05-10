import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";



const Addfriend = ({ showaddfriend, setshowaddfriend }) => {
  const dispatch = useDispatch();
  const [keyword, setkeyword] = useState();
  const [allusers, setallusers] = useState([]);
  const [userfilter, setuserfilter] = useState([]);
  const currentusername = useSelector((state) => state.loginstate.user.username);

  const refreshallusers = async () =>{
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


  //if user try to search, then update all userlist to avoid that some new user appear after loading the component
  useEffect(() => {
    const updateuserlist = async () =>{
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

  //in the first rendering, show all possible user on the screen, 
  //else if all users changed meaning there are new people register

  useEffect(() => {
    setuserfilter(allusers);
  }, [allusers]);

  const filteruserlist = () => {
    let filtered = allusers.filter( eachuser => {
      return eachuser.toLowerCase().match(keyword);
    });

      setuserfilter(filtered);
    
  };
  return (
    <>
      <Modal
        size="lg"
        show={showaddfriend}
        onHide={() => setshowaddfriend(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header>
          <Modal.Title id="example-modal-sizes-title-lg">
            <div class="input-group mb-3">
              {/*search bar to filter the user we want ----------------------------------*/}

              <input
                type="text"
                className="form-control"
                onChange={(e) => setkeyword(e.target.value)}
              />
              <button onClick={filteruserlist} className="btn btn-outline-secondary">
                Search friend by keyword
              </button>

              <button onClick={refreshallusers} className="btn btn-outline-secondary">
                Refresh
              </button>

              {/*end of search bar to filter the user we want-------------------------------- */}
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/**render each user------------------------------- */}

          {userfilter.map( eachusername => {return <Eachusercard eachusername={eachusername} />
          ;}
          )}

          {/**end of render each user------------------------------------------ */}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setshowaddfriend(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const Eachusercard = ({eachusername}) =>{
  const [show, setshow] = useState(false);
  const [message, setmessage] = useState();
  const currentusername = useSelector((state) => state.loginstate.user.username);

  const sendfriendrequest = async () =>{
    const response = await fetch(
      'https://chatappclonebackend.herokuapp.com/api/user/requestfriend', {
        method:'POST',
        body: JSON.stringify(
          {
            username: currentusername,
            friendname: eachusername
          }
        ),
        headers: {'Content-Type' : 'application/json'}
      }
    )

    const responsedata = await response.json();

    if(response.ok){
        setshow(true);
        setmessage('Friend Request is sent successfully');
    }

    if(!response.ok){
      setshow(true);
      setmessage(responsedata.message)
    }
  }
  return <>
  <div className="card">
    <div className="card-body">
      {eachusername} <Button style={{float:'right'}} onClick={sendfriendrequest}>Send Friend Request</Button>
      {show && <>
       <br />
       {message}
      </>
      }
    </div>
  </div>
</>
}

export default Addfriend;

import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Modal, Button} from 'react-bootstrap'

const Managefriendrequest = ({showmanagefriend, setshowmanagefriend}) =>{
    const dispatch = useDispatch();
    const [friendrequestlist, setfriendrequestlist] = useState([]);
    const username = useSelector(state => state.loginstate.user.username);

    const fetchfriendrequest = async () =>{
        const response = await fetch('https://chatappclonebackend.herokuapp.com/api/user/login', {
            method: 'POST',
            body: JSON.stringify({
                username
            }),
            headers: {
                'Content-Type': 'application/json'
            } 
        });
        const responsedata = await response.json();
        setfriendrequestlist(responsedata.user.friendrequest);
        dispatch({
            type: 'fetchuser',
            user: responsedata.user
       });
       };

       //init request to get all user requests and update state on first rendering----------------
       
    useState( () =>{
        fetchfriendrequest();
    }
    );
    //END init request to get all user requests and update state on first rendering----------------

    return <Modal
        size="lg"
        show={showmanagefriend}
        onHide={() => setshowmanagefriend(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      > 
      <Modal.Header><h2>Friend Requests</h2><Button onClick={fetchfriendrequest}>Refresh</Button></Modal.Header>
          <Modal.Body>
              {/**main content ------------------------------------------------------ */}
              {
                  friendrequestlist.map(eachrequestusername => 
                    <Eachrequest 
                    eachrequestusername={eachrequestusername}
                    fetchfriendrequest={fetchfriendrequest}
                    />
                    )
              }
              {/**end of main content --------------------------------------------------- */}
          </Modal.Body>
       <Modal.Footer>
          <Button onClick={() => setshowmanagefriend(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    
}

const Eachrequest = ({eachrequestusername, fetchfriendrequest}) =>{
    const username = useSelector(state => state.loginstate.user.username);
    const acceptrequest = async () =>{
        const response = await fetch('https://chatappclonebackend.herokuapp.com/api/user/addfriend', {
            method: 'POST',
            body: JSON.stringify({
                username,
                friendname: eachrequestusername
            }),
            headers:{
                'Content-Type' : 'application/json'
            }
        });
        await fetchfriendrequest();
    }

    return <>
    <div className="card">
    <div className="card-body">
     {eachrequestusername}  <Button onClick={acceptrequest} style={{float:'right'}} >Accept Friend Request</Button>
    </div>
  </div>

    </>
}



export default Managefriendrequest;
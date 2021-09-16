import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import useInterval from 'use-interval';
import { Modal, Button } from 'react-bootstrap'

const Managefriendrequest = ({ showmanagefriend, setshowmanagefriend }) => {
    const dispatch = useDispatch();
    const [friendrequestlist, setfriendrequestlist] = useState([]);
    const username = useSelector(state => state.loginstate.user.username);

    const fetchfriendrequest = async () => {
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

    useInterval(
        () => {
            fetchfriendrequest();
        }, 5000
    )

    return <Modal
        size="lg"
        show={showmanagefriend}
        onHide={() => setshowmanagefriend(false)}
    >
        <Modal.Body>
            <div className='disp-flex space-between mb-3'>
                <div className='font-14p px-2 py-1 bold green-color'>
                    Friend Request List
                </div>
                <div onClick={() => setshowmanagefriend(false)} className='user-select-none cursor-pointer green-bg disp-flex rounder-border white-color font-14p px-3 bold'>
                    <div className='m-auto'>
                        Close
                    </div>
                </div>
            </div>
            <div className='height-80vh overflow-auto pt-1'>
            {
                friendrequestlist.map(eachrequestusername =>
                    <Eachrequest
                        eachrequestusername={eachrequestusername}
                        fetchfriendrequest={fetchfriendrequest}
                    />
                )
            }
            </div>
            {/**end of main content --------------------------------------------------- */}
        </Modal.Body>
    </Modal>

}

const Eachrequest = ({ eachrequestusername, fetchfriendrequest }) => {
    const username = useSelector(state => state.loginstate.user.username);
    const acceptrequest = async () => {
        const response = await fetch('https://chatappclonebackend.herokuapp.com/api/user/addfriend', {
            method: 'POST',
            body: JSON.stringify({
                username,
                friendname: eachrequestusername
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        await fetchfriendrequest();
    }

    return <>
        <div className="mb-3 green-border-bottom disp-flex space-between">
                    <div className='font-14p green-color bold'>{eachrequestusername}</div> 
                    <div className='green-border font-12p bold py-1 white-bg px-2 green-color rounder-border cursor-pointer user-select-none' onClick={acceptrequest} >Accept Friend Request</div>
            
        </div>

    </>
}



export default Managefriendrequest;
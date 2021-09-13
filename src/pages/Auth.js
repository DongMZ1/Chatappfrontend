import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from '../customhooks/useForm'
import { loginvalidator } from '../validator/formvalidator'
const Auth = () => {
    const [formstate, handleonchange] = useForm([]);
    const dispatch = useDispatch();
    const [formerror, formisvalid] = loginvalidator(formstate);
    const [showserverstart, setshowserverstart] = useState(false);
    const handlelogin = async (e) => {
        e.preventDefault();
        setshowserverstart(true);
        let response
        while (!response) {
            response = await fetch('https://chatappclonebackend.herokuapp.com/api/user/login', {
                method: 'POST',
                body: JSON.stringify(formstate),
                headers: { 'Content-Type': 'application/json' },
            });
        }
        setshowserverstart(false);
        const responsedata = await response.json();

        dispatch(
            {
                type: 'login',
                user: responsedata.user,
                islogin: true,
            }
        );

    }
    return (

        <div className='disp-flex width-100 height-100vh'>
            <div className='m-auto'>
                <div>
                    <input className='mb-1 font-14p' type="text" name="username" placeholder="User Name" onChange={handleonchange} />
                    {!formisvalid
                        && <div id="emailHelp" className="font-14p ms-2 mb-1 bold red-color">{formerror.username}</div>}
                </div>
                <div className='disp-flex space-between'>
                    <div className={`${formisvalid ? 'cursor-pointer':'opacity-0-4'} user-select-none width-min-content font-14p bold disp-flex white-color green-bg rounder-border py-1 px-2`} onClick={formisvalid && handlelogin}><div className='m-auto'>Login</div></div>
                    <div className='font-14p bold disp-flex green-color'><div className='m-auto'>{showserverstart && 'server is loading'}</div></div>
                </div>
            </div>
        </div>

    )

}

export default Auth;
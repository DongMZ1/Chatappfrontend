import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'
import Auth from './pages/Auth'
import { io } from "socket.io-client";
import Homepage from './pages/Homepageafterlogin'
import './index.scss'
const App = () => {
  const dispatch = useDispatch();
  return (
    <>
      {useSelector(state => state.loginstate.islogin) ?
        <Homepage /> : <Auth />
      }
    </>
  );
}

export default App;

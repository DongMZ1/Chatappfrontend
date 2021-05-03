import logo from './logo.svg';
import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Button} from 'react-bootstrap'
import Auth from './pages/Auth'
const App = () => {
  const dispatch = useDispatch();
  return (
   <>
    {useSelector(state => state.loginstate.islogin)?
    'you are login' : <Auth />
    }
   </>
  );
}

export default App;

import logo from './logo.svg';
import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Button} from 'react-bootstrap'
const App = () => {
  const dispatch = useDispatch();
  return (
   <>
    count : {useSelector(state => state.loginstate.count)}
    <Button onClick={() => dispatch({type: 'add'})}>Add One</Button>
   </>
  );
}

export default App;

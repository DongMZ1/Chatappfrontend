import React, {useState} from "react";
import { useSelector, useDispatch, useStore } from "react-redux";
import Addfriend from '../components/Addfriend'
import Sidebareachfriend from './Sidebareachfriend'
const Sidebar = ({setselecteduser, selecteduser}) => {
  const [showaddfriend, setshowaddfriend] = useState(false);
  const dispatch = useDispatch();
  const store = useStore().getState()
  return (
    <>
     <Addfriend showaddfriend={showaddfriend} setshowaddfriend={setshowaddfriend} />
     <button type="button" onClick={()=>setshowaddfriend(true)} className="btn btn-outline-secondary">Add Friends</button>
     <br />
     <br />
    <div style={{ height: "600px",
          overflow: "auto",
          border: "2px solid blue"
          }}>
      {/**------------------------container-------------------------------- */}
      {console.log(store.loginstate.user.messages)}

    {/**------------------------end of container-------------------------------- */}
    </div>
</>
  );
};

export default Sidebar;

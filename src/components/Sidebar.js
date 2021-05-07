import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import Addfriend from '../components/Addfriend'
const Sidebar = () => {
  const [showaddfriend, setshowaddfriend] = useState(false);
  const dispatch = useDispatch();
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
    <ol className="list-group list-group-numbered">
  <ul className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">Subheading</div>
      Cras justo odio
    </div>
    <span className="badge bg-primary rounded-pill">14</span>
  </ul>
  <ul className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">Subheading</div>
      Cras justo odio
    </div>
    <span className="badge bg-primary rounded-pill">14</span>
  </ul>
  <ul className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">Subheading</div>
      Cras justo odio
    </div>
    <span className="badge bg-primary rounded-pill">14</span>
  </ul>
  <ul className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">Subheading</div>
      Cras justo odio
    </div>
    <span className="badge bg-primary rounded-pill">14</span>
  </ul>
  <ul className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">Subheading</div>
      Cras justo odio
    </div>
    <span className="badge bg-primary rounded-pill">14</span>
  </ul>
  <ul className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">Subheading</div>
      Cras justo odio
    </div>
    <span className="badge bg-primary rounded-pill">14</span>
  </ul>
  <ul className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">Subheading</div>
      Cras justo odio
    </div>
    <span className="badge bg-primary rounded-pill">14</span>
  </ul>
  <ul className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">Subheading</div>
      Cras justo odio
    </div>
    <span className="badge bg-primary rounded-pill">14</span>
  </ul>
  <ul className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">Subheading</div>
      Cras justo odio
    </div>
    <span className="badge bg-primary rounded-pill">14</span>
  </ul>
  <ul className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">Subheading</div>
      Cras justo odio
    </div>
    <span className="badge bg-primary rounded-pill">14</span>
  </ul>
  <ul className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">Subheading</div>
      Cras justo odio
    </div>
    <span className="badge bg-primary rounded-pill">14</span>
  </ul>
  <ul className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">Subheading</div>
      Cras justo odio
    </div>
    <span className="badge bg-primary rounded-pill">14</span>
  </ul>
  <ul className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">Subheading</div>
      Cras justo odio
    </div>
    <span className="badge bg-primary rounded-pill">14</span>
  </ul>
</ol>
    {/**------------------------end of container-------------------------------- */}
    </div>
</>
  );
};

export default Sidebar;

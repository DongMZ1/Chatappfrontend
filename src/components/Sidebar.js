import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

const Sidebar = () =>{
    const dispatch = useDispatch();
    return(
        
        <> 
        <br />
        <br />
        <div className = 'container'>
 {/**---------------------------------------------------------------------------------------- */}
        <div className='col-sm-2'>
        <ol className="list-group list-group-numbered">
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            Cras justo odio
          </div>
          <span className="badge bg-primary rounded-pill">14</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            Cras justo odio
          </div>
          <span className="badge bg-primary rounded-pill">14</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            Cras justo odio
          </div>
          <span className="badge bg-primary rounded-pill">14</span>
        </li>
      </ol>
      </div>
      {/*------------------------------------------------------------------------------- */}
      <div className='col-sm-10'>

      </div>
    {/**--------------------------------------------------------------------------------- */}
      </div>
      </>
        
    )
}

export default Sidebar;
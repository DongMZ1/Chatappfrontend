import React from 'react';
import {Button} from 'react-bootstrap'

const Fixedfooterinput = ({setmessagetosend}) =>{

    return <>
       <div className="input-group mb-3" >
        <textarea type="text" className="form-control" onChange={(e) => setmessagetosend(e.target.value)} />
        <Button onClick={()=>{}}>Send Message</Button>
      </div>
    </>
}

export default Fixedfooterinput;
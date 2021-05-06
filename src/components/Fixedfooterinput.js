import React from 'react';
import {Button} from 'react-bootstrap'

const Fixedfooterinput = () =>{
    return <>
       <div className="input-group mb-3" >
        <textarea type="text" className="form-control" />
        <Button>Send Message</Button>
      </div>
    </>
}

export default Fixedfooterinput;
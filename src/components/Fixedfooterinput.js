import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap'

const Fixedfooterinput = ({ setmessagetosend, sendcontenttoserver, messagetosend }) => {
  return <>
    <form className="input-group mb-3" >
      <input value={messagetosend} type="text" className="form-control" onChange={(e) => setmessagetosend(e.target.value)} />
      <Button type='submit' onClick={(e) => sendcontenttoserver(e)}>Send Message</Button>
    </form>
  </>
}

export default Fixedfooterinput;
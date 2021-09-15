import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap'

const Fixedfooterinput = ({ setmessagetosend, sendcontenttoserver, messagetosend }) => {
  return <>
    <form className="disp-flex" >
      <input className='font-14p' value={messagetosend} type="text" onChange={(e) => setmessagetosend(e.target.value)} />
      <button className='white-bg green-border rounder-border font-14p green-color bold' type='submit' onClick={(e) => sendcontenttoserver(e)}>Send Message</button>
    </form>
  </>
}

export default Fixedfooterinput;
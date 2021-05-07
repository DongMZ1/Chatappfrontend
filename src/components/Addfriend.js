import React from 'react'
import {Modal, Button} from 'react-bootstrap'
const Addfriend = ({showaddfriend, setshowaddfriend}) =>{
    return<>
        <Modal
        size="lg"
        show={showaddfriend}
        onHide={() => setshowaddfriend(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
        <Modal.Footer>
        <Button onClick={() => setshowaddfriend(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
}

export default Addfriend;
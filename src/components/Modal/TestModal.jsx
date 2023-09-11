import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import RocketLaunch from '../../assets/images/rocket-launch.svg';

import './TestModal.css';

const TestModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="warning" size="lg" className="text-uppercase fw-bold" onClick={handleShow}>
        <RocketLaunch className="me-3 fs-2" />
        Launch Bootstrap modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>You did it!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="text-uppercase fw-bold" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" className="text-uppercase fw-bold" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TestModal;

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const AddModal=({setModal, modal})=> {


  return (
      <Modal size='md' show={modal}>
        <Modal.Header closeButton onClick={()=> setModal(!modal)}>
          <Modal.Title>Appoinment for</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="email"
                placeholder="Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
            >
              <Form.Label>Date</Form.Label>
              <Form.Control  type='date'/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className='m-auto'>
          <Button variant="primary" type='submit' disabled onSubmit={()=> setModal(modal)}>
            Submit
          </Button>
          <Button variant="danger" onClick={()=> setModal(!modal)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

export default AddModal;
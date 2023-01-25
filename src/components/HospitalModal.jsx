import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

export const HospitalModal = (props) => {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Hospital
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <h4>Centered Modal</h4> */}
          <Form>
            <Form.Group className="mb-3" controlId="hospitalName">
              <Form.Label>Hospital Name</Form.Label>
              <Form.Control type="text" required/>
              <Form.Text className="text-muted">
                Only Superusers can add hospitals
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="hospitalAddress">
              <Form.Label>Hospital Address</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="hospitalContact">
              <Form.Label>Hospital Contact</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="hospitalWallet">
              <Form.Label>Hospital wallet</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

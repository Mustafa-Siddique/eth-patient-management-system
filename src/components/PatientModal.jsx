import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

export const PatientModal = (props) => {
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
            Add Patient
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <h4>Centered Modal</h4> */}
          <Form>
            <Form.Group className="mb-3" controlId="patientName">
              <Form.Label>Patient's Name</Form.Label>
              <Form.Control type="text" required/>
              <Form.Text className="text-muted">
                Only Hospitals can add Patients
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="PatientAddress">
              <Form.Label>Patient's Address</Form.Label>
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
  )
}

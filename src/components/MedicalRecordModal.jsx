import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

export const MedicalRecordModal = (props) => {
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
            Add Medical Record
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <h4>Centered Modal</h4> */}
          <Form>
            <Form.Group className="mb-3" controlId="diagnosis">
              <Form.Label>Diagnosis</Form.Label>
              <Form.Control type="text" required/>
              <Form.Text className="text-muted">
                Only Doctors can add medical records
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="prescription">
              <Form.Label>Prescription</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="notes">
              <Form.Label>Notes</Form.Label>
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

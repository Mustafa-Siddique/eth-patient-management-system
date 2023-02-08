import { computeHeadingLevel } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { addMedicalRecord, getPatientIds } from "../web3/methods";

export const MedicalRecordModal = (props) => {
  // Patient Wallet Address
  const [patientAddress, setPatientAddress] = useState(null);

  // useEffect to get patient id when props.patientId is updated
  useEffect(() => {
    getPatiendId();
  }, [props.patientId]);

  // Get Patient Id from props.patientId
  const getPatiendId = async () => {
    const result = await getPatientIds(props.patientId);
    setPatientAddress(result);
  };

  // React toastify notification
  const notifySuccess = () => toast("Medical Record added successfully!");
  const notifyError = () => toast("Error adding records. Check logs!");

  // Handle submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    const diagnosis = event.target.diagnosis.value;
    const prescription = event.target.prescription.value;
    const notes = event.target.notes.value;
    // Submit and wait for the result and then use react toastify to show the result
    const result = await addMedicalRecord(
      patientAddress,
      diagnosis,
      prescription,
      notes
    );
    if (result.status) {
      notifySuccess();
    } else {
      notifyError();
      console.log("Cannot add Patient", result);
    }
  };

  return (
    <div>
      <ToastContainer />
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
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="diagnosis">
              <Form.Label>Diagnosis</Form.Label>
              <Form.Control type="text" required />
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
  );
};

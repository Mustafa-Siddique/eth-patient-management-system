import { computeHeadingLevel } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { addPatientToContract, getDoctorId } from "../web3/methods";

export const PatientModal = (props) => {
  // React toastify notification
  const notifySuccess = () => toast("Patient added successfully!");
  const notifyError = () => toast("Error adding patient. Check logs!");

  // Fetch wallet from redux store
  const wallet = useSelector((state) => state.wallet.value);

  // State to store doctor id
  const [doctorId, setDoctorId] = useState(null);

  // Checking doctor id on component mount
  useEffect(() => {
    _getDoctorId();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const patientName = event.target.patientName.value;
    const patientAddress = event.target.PatientAddress.value;
    const patientAge = event.target.PatientAge.value;
    const patientGender = event.target.PatientGender.value;
    const patientDiagnosis = event.target.PatientDiagnosis.value;
    const PatientPrescription = event.target.PatientPrescription.value;
    const PatientNotes = event.target.PatientNotes.value;
    // Submit and wait for the result and then use react toastify to show the result
    const result = await addPatientToContract(
      patientName,
      patientAge,
      patientGender,
      doctorId,
      patientAddress,
      patientDiagnosis,
      PatientPrescription,
      PatientNotes
    );
    console.log(result);
    if (result.status) {
      notifySuccess();
    } else {
      notifyError();
      console.log("Cannot add Patient", result);
    }
  };

  // Get doctor's id from blockchain
  const _getDoctorId = async () => {
    const result = await getDoctorId(wallet);
    setDoctorId(result);
  };

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
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="patientName">
              <Form.Label>Patient's Name</Form.Label>
              <Form.Control type="text" required />
              <Form.Text className="text-muted">
                Only Hospitals can add Patients
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="PatientAddress">
              <Form.Label>Patient's Wallet</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>

            {/* Put Patient Age and Gender in a single row */}
            <Form.Group className="d-flex w-100 mb-3">
              <Form.Group className="w-50" controlId="PatientAge">
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" required />
              </Form.Group>
              <Form.Group className="ms-3 w-50" controlId="PatientGender">
                <Form.Label>Gender</Form.Label>
                <Form.Control type="text" required />
              </Form.Group>
            </Form.Group>

            <Form.Group className="mb-3" controlId="PatientDiagnosis">
              <Form.Label>Diagnosis</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="PatientPrescription">
              <Form.Label>Prescription</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="PatientNotes">
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

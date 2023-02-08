import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { addDoctor, getHospitalId } from "../web3/methods";

export const DoctorModal = (props) => {
  // React toastify notification
  const notifySuccess = () => toast("Doctor added successfully!");
  const notifyError = () => toast("Error adding doctor. Check logs!");

  // Fetch wallet from redux store
  const wallet = useSelector((state) => state.wallet.value);

  // State to store hospital id
  const [hospitalId, setHospitalId] = useState(null);

  useEffect(() => {
    _getHospitalId();
  }, []);

  // Fetch hospital id from blockchain
  const _getHospitalId = async () => {
    const result = await getHospitalId(wallet);
    setHospitalId(result);
  };

  // Form submission handler for adding a doctor to the blockchain
  const handleSubmit = async (event) => {
    event.preventDefault();
    const doctorName = event.target.doctorName.value;
    const doctorAddress = event.target.doctorAddress.value;
    // Submit and wait for the result and then use react toastify to show the result
    const result = await addDoctor(doctorName, hospitalId, doctorAddress);
    console.log(result);
    if (result.status) {
      notifySuccess();
    } else {
      notifyError();
      console.log("Cannot add Doctor", result);
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
            Add Doctor
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <h4>Centered Modal</h4> */}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="doctorName">
              <Form.Label>Doctor's Name</Form.Label>
              <Form.Control type="text" required />
              <Form.Text className="text-muted">
                Only Hospitals can add Doctors
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="doctorAddress">
              <Form.Label>Doctor's Address</Form.Label>
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

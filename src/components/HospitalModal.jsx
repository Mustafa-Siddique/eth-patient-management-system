import React, { useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { addHospital } from "../web3/methods";

export const HospitalModal = (props) => {
  // React toastify notification
  const notifySuccess = () => toast("Hospital added successfully!");
  const notifyError = () => toast("Error adding hospital. Check logs!");

  // Form submission handler for adding a hospital to the blockchain
  const handleSubmit = async (event) => {
    event.preventDefault();
    const hospitalName = event.target.hospitalName.value;
    const hospitalAddress = event.target.hospitalAddress.value;
    const hospitalContact = event.target.hospitalContact.value;
    const hospitalWallet = event.target.hospitalWallet.value;
    // Submit and wait for the result and then use react toastify to show the result
    const result = await addHospital(
      hospitalName,
      hospitalAddress,
      hospitalContact,
      hospitalWallet
    );
    console.log(result);
    if (result.status) {
      notifySuccess();
    } else {
      notifyError();
      console.log("Cannot add Hospital", result);
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
            Add Hospital
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <h4>Centered Modal</h4> */}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="hospitalName">
              <Form.Label>Hospital Name</Form.Label>
              <Form.Control type="text" required />
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

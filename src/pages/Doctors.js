import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Footer } from "../components/Footer";
import { NavbarTop } from "../components/NavbarTop";
import { PatientModal } from "../components/PatientModal";
import { PatientTable } from "../components/PatientTable";
import { getPatientInfo, getUserType } from "../web3/methods";

export const Doctors = () => {
  const [modalShow, setModalShow] = useState(false);
  const [patientArray, setPatientArray] = useState([]);

  // User type state
  const [userType, setUserType] = useState(null);

  // Get wallet address from redux store
  const wallet = useSelector((state) => state.wallet.value);

  // on submit handler to get patient info
  const onSubmit = async (e) => {
    e.preventDefault();
    setPatientArray([]);
    const patientWallet = e.target.patientAddress.value;
    // Get patient info from blockchain
    const res = await getPatientInfo(patientWallet);
    setPatientArray((prev) => [...prev, res]);
  };

  // Get user type on page load
  useEffect(() => {
    _getUserType();
  }, []);

  // Get user type
  const _getUserType = async () => {
    const userType = await getUserType(wallet);
    setUserType(userType);
  };

  return (
    <div>
      <NavbarTop />
      <Container style={{ minHeight: "90vh" }}>
        <h1 className="my-5">Doctors</h1>
        <Button
          className="ms-auto d-block mb-3"
          onClick={() => setModalShow(true)}
          disabled={userType !== "5"}
        >
          Add Patient
        </Button>
        <PatientModal show={modalShow} onHide={() => setModalShow(false)} />
        <h2>View Patient Details</h2>
        <Form
          className="mb-5"
          style={{ maxWidth: "700px" }}
          onSubmit={onSubmit}
        >
          <Form.Group className="mb-3" controlId="patientAddress">
            <Form.Label>Patient's Address</Form.Label>
            <Form.Control type="text" required placeholder="0x..." />
          </Form.Group>
          <Button type="submit" disabled={userType !== "5"}>
            Submit
          </Button>
        </Form>
        {/* Show Patient Table only when Patient Array has data */}
        {patientArray.length > 0 && (
          <PatientTable patientArray={patientArray} />
        )}
      </Container>
      <Footer />
    </div>
  );
};

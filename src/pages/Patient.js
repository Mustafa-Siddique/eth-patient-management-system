import React, { useEffect, useState } from "react";
import { Button, Container, Form, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Footer } from "../components/Footer";
import { NavbarTop } from "../components/NavbarTop";
import { getMedicalRecord, getPatientInfo } from "../web3/methods";

export const Patient = () => {
  // Wallet from redux store
  const wallet = useSelector((state) => state.wallet.value);

  // State for patient info
  const [patient, setPatient] = useState([]);
  const [medicalRecord, setMedicalRecord] = useState([]);

  // get patient info from contract on submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Fetch patient info from contract
    const patientInfo = await getPatientInfo(wallet);
    setPatient(patientInfo);
  };
  console.log(patient);

  // run a loop when patientArray is updated and get medical record from patientArray[5]
  useEffect(() => {
    setMedicalRecord([]);
    const _getMedicalRecord = async (patientArray) => {
      const medicalRecordIds = await patientArray[5];
      for (let i = 0; i < medicalRecordIds.length; i++) {
        const result = await getMedicalRecord(medicalRecordIds[i]);
        setMedicalRecord((medicalRecord) => [...medicalRecord, result]);
      }
    };
    _getMedicalRecord(patient);
  }, [patient]);

  return (
    <div>
      <NavbarTop />
      <Container style={{ minHeight: "90vh" }}>
        <h1 className="my-5">Patient</h1>
        <h2>View Your Details</h2>
        <Form
          className="mb-5"
          style={{ maxWidth: "700px" }}
          onSubmit={handleSubmit}
        >
          <Form.Group className="mb-3" controlId="patientAddress">
            <Form.Label>Your Address</Form.Label>
            <Form.Control disabled type="text" required value={wallet} />
            <Form.Text className="text-muted">
              You can view your own details.{" "}
              {wallet.length > 0 ? " ✅" : "Connect Your Wallet ❌"}
            </Form.Text>
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
        <Table
          striped
          bordered
          hover
          responsive
          style={{ maxWidth: "700px" }}
          className="mx-auto"
        >
          <tbody>
            <tr>
              <th>Name</th>
              <td>{patient[0]}</td>
            </tr>
            <tr>
              <th>Gender</th>
              <td>{patient[2]}</td>
            </tr>
            <tr>
              <th>Age</th>
              <td>{patient[1]}</td>
            </tr>
            <tr>
              <th>DoctorId</th>
              <td>{patient[3]}</td>
            </tr>
            <tr>
              <th>Wallet</th>
              <td>{patient[4]}</td>
            </tr>
          </tbody>
        </Table>
        {/* Medical History mapped with data of patient[5] */}
        <div className="mt-5">
          <h3>Medical History</h3>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Diagnosis</th>
                <th>Prescription</th>
                <th>Notes</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {/* Mapping medical history with tr */}
              {medicalRecord.map((record, index) => (
                <tr key={index}>
                  <td>{record[0]}</td>
                  <td>{record[1]}</td>
                  <td>{record[2]}</td>
                  <td>{record[3]}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

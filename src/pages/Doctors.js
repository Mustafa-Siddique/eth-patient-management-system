import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Footer } from "../components/Footer";
import { NavbarTop } from "../components/NavbarTop";
import { PatientModal } from "../components/PatientModal";
import { PatientTable } from "../components/PatientTable";

export const Doctors = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <NavbarTop />
      <Container style={{ minHeight: "90vh" }}>
        <h1 className="my-5">Doctors</h1>
        <Button
          className="ms-auto d-block mb-3"
          onClick={() => setModalShow(true)}
        >
          Add Patient
        </Button>
        <PatientModal show={modalShow} onHide={() => setModalShow(false)} />
        <h2>View Patient Details</h2>
        <Form className="mb-5" style={{ maxWidth: "700px" }}>
          <Form.Group className="mb-3" controlId="patientAddress">
            <Form.Label>Patient's Address</Form.Label>
            <Form.Control type="text" required placeholder="0x..." />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
        <PatientTable />
      </Container>
      <Footer />
    </div>
  );
};

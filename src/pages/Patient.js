import React from "react";
import { Button, Container, Form, Table } from "react-bootstrap";
import { Footer } from "../components/Footer";
import { NavbarTop } from "../components/NavbarTop";

export const Patient = () => {
  return (
    <div>
      <NavbarTop />
      <Container style={{ minHeight: "90vh" }}>
        <h1 className="my-5">Patient</h1>
        <h2>View Your Details</h2>
        <Form className="mb-5" style={{ maxWidth: "700px" }}>
          <Form.Group className="mb-3" controlId="patientAddress">
            <Form.Label>Your Address</Form.Label>
            <Form.Control type="text" required placeholder="0x..." />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
        <Table
          striped
          bordered
          hover
          style={{ maxWidth: "700px" }}
          className="mx-auto"
        >
          <tbody>
            <tr>
              <th>ID</th>
              <td>1</td>
            </tr>
            <tr>
              <th>1</th>
              <td>Patient 1</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>Patient 1</td>
            </tr>
            <tr>
              <th>DoctorId</th>
              <td>5</td>
            </tr>
            <tr>
              <th>Medical History</th>
              <td>...</td>
            </tr>
          </tbody>
        </Table>
        <Form className="mt-5" style={{ maxWidth: "700px" }}>
          <Form.Group className="mb-3" controlId="patientAddress">
            <Form.Label className="fw-bold">Give Access to Doctor</Form.Label>
            <Form.Control type="text" required placeholder="0x..." />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
      <Footer />
    </div>
  );
};

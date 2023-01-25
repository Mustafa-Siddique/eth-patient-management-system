import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Footer } from "../components/Footer";
import { HospitalModal } from "../components/HospitalModal";
import { HospitalTable } from "../components/HospitalTable";
import { NavbarTop } from "../components/NavbarTop";

export const SuperUsers = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      <NavbarTop />
      <Container style={{ minHeight: "90vh" }}>
        <h1 className="my-5">Super Users</h1>
        <Button
          onClick={() => setModalShow(true)}
          className="ms-auto mb-3 d-block"
        >
          Add Hospital
        </Button>
        <HospitalModal show={modalShow} onHide={() => setModalShow(false)} />
        <HospitalTable />
      </Container>
      <Footer />
    </div>
  );
};

import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { DoctorModal } from "../components/DoctorModal";
import { DoctorTable } from "../components/DoctorTable";
import { Footer } from "../components/Footer";
import { NavbarTop } from "../components/NavbarTop";

export const Hospitals = () => {
    const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      <NavbarTop />
      <Container style={{ minHeight: "90vh" }}>
        <h1 className="my-5">Hospitals</h1>
        <Button className="ms-auto d-block mb-3" onClick={()=>setModalShow(true)}>Add Doctor</Button>
        <DoctorModal show={modalShow} onHide={()=> setModalShow(false)}/>
        <DoctorTable/>
      </Container>
      <Footer />
    </div>
  );
};

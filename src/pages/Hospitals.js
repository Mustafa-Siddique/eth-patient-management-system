import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { DoctorModal } from "../components/DoctorModal";
import { DoctorTable } from "../components/DoctorTable";
import { Footer } from "../components/Footer";
import { NavbarTop } from "../components/NavbarTop";
import {
  getDoctorIdCounter,
  getDoctorInfo,
  getUserType,
} from "../web3/methods";

export const Hospitals = () => {
  // Modal state
  const [modalShow, setModalShow] = useState(false);

  // Doctor array state
  const [doctorArray, setDoctorArray] = useState([]);

  // User type state
  const [userType, setUserType] = useState(null);

  // Check if useEffect has run once
  let ranOnce = false;

  // Get wallet address from redux store
  const wallet = useSelector((state) => state.wallet.value);

  // Get user type and doctor info on page load
  useEffect(() => {
    if (!ranOnce && doctorArray.length === 0) {
      _getDoctorInfo();
      ranOnce = true;
    }
    _getUserType();
  }, []);

  // Get doctor info
  const _getDoctorInfo = async () => {
    const doctorCount = await getDoctorIdCounter();
    for (let i = 0; i < doctorCount; i++) {
      const doctorInfo = await getDoctorInfo(i);
      setDoctorArray((prev) => [...prev, doctorInfo]);
    }
  };

  // Get user type
  const _getUserType = async () => {
    const userType = await getUserType(wallet);
    setUserType(userType);
  };

  return (
    <div>
      <NavbarTop />
      <Container style={{ minHeight: "90vh" }}>
        <h1 className="my-5">Hospitals</h1>
        <Button
          className="ms-auto d-block mb-3"
          onClick={() => setModalShow(true)}
          // if usertype is not equal to 4, then disable the button
          disabled={userType !== "4"}
        >
          Add Doctor
        </Button>
        <DoctorModal show={modalShow} onHide={() => setModalShow(false)} />
        <DoctorTable doctors={doctorArray}/>
      </Container>
      <Footer />
    </div>
  );
};

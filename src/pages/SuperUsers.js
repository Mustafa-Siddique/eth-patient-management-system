import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Footer } from "../components/Footer";
import { HospitalModal } from "../components/HospitalModal";
import { HospitalTable } from "../components/HospitalTable";
import { NavbarTop } from "../components/NavbarTop";
import { getHospitalIdCounter, getHospitalInfo, getUserType } from "../web3/methods";

export const SuperUsers = () => {
  // Modal state
  const [modalShow, setModalShow] = useState(false);

  // Hospital array state
  const [hospitalArray, setHospitalArray] = useState([]);

  // User type state
  const [userType, setUserType] = useState("");

  // Check if useEffect has run once
  let ranOnce = false;

  // Get wallet address from redux store
  const wallet = useSelector((state) => state.wallet.value);

  // Get user type and hospital info on page load
  useEffect(() => {
    if (!ranOnce && hospitalArray.length === 0) {
      _getHospitalInfo();
      ranOnce = true;
    }
    _getUserType();
  }, []);

  // Get hospital info
  const _getHospitalInfo = async () => {
    const hospitalCount = await getHospitalIdCounter();
    for (let i = 0; i < hospitalCount; i++) {
      const hospitalInfo = await getHospitalInfo(i);
      setHospitalArray((prev) => [...prev, hospitalInfo]);
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
        <h1 className="my-5">Super Users</h1>
        <Button
          onClick={() => setModalShow(true)}
          className="ms-auto mb-3 d-block"
          // if usertype is not equal to 0, then disable the button
          disabled={userType !== "0" || userType === "1" || userType === "2"}
        >
          Add Hospital
        </Button>
        <HospitalModal show={modalShow} onHide={() => setModalShow(false)} />
        <HospitalTable hospitals={hospitalArray}/>
      </Container>
      <Footer />
    </div>
  );
};

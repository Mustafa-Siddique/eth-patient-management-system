import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getUserType } from "../web3/methods";

export const UserChecker = () => {
  // Get Wallet Address from Redux
  const wallet = useSelector((state) => state.wallet.value);
  const [userWallet, setUserWallet] = useState("");
  const [enumId, setEnumId] = useState(null);

  // function to get the user role
  const getUserRole = async () => {
    const res = await getUserType(userWallet);
    setEnumId(res);
    console.log(res);
  };

  // function to handle the form submit and call the getUserRole function
  const handleSubmit = (e) => {
    e.preventDefault();
    getUserRole();
  };
  return (
    <div className="mt-5 w-100">
      <h2>User Wallet Checker</h2>
      <p>Check the user role using Wallet Address</p>
      <Form
        className="mb-5"
        style={{ maxWidth: "700px" }}
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="patientAddress">
          <Form.Label>Wallet Address</Form.Label>
          <Form.Control
            type="text"
            required
            value={userWallet}
            placeholder="0x..."
            onChange={(e) => setUserWallet(e.target.value)}
          />
        </Form.Group>
        <Button
          type="submit"
          disabled={userWallet === "" || userWallet === wallet}
        >
          Submit
        </Button>
      </Form>
      <div style={{ maxWidth: "700px" }} className="d-block mx-auto">
        {/* If enumId is 1/2/3 prompt user "Selected user is Superuser", if enumId is 4 show Hospital, or if enumId is 5 show Doctor */}
        {enumId === "0" || enumId === "1" || enumId === "2" ? (
          <p className="mt-3 text-success">Selected user is Superuser</p>
        ) : enumId === "3" ? (
          <p className="mt-3 text-success">Selected user is Hospital</p>
        ) : enumId === "4" ? (
          <p className="mt-3 text-success">Selected user is Doctor</p>
        ) : enumId === "5" ? (
          <p className="mt-3 text-success">Selected user is Patient</p>
        ) : null}
      </div>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Web3 from "web3";
import { addWallet, selectWallet } from "../features/walletSlice";

export const NavbarTop = () => {
  const [signAdd, setSignAdd] = useState("");
  let signature;

  useEffect(() => {
    getCurrentWallet();
    addWalletListener();
  });

  const dispatch = useDispatch();

  // Connect Wallet Function on Click
  async function connectWallet() {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        // Metamask is installed
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        // Sign & Verify
        const web3 = new Web3(window.ethereum);
        await web3.eth.personal
          .sign("Login using Wallet", accounts[0])
          .then((result) => {
            signature = result;
          })
          .catch((err) => {
            console.error(err);
          });
        let signingAddress = web3.eth.accounts.recover(
          "Login using Wallet",
          signature
        );
        setSignAdd(signingAddress);
        dispatch(addWallet(accounts[0]));
      } catch (err) {
        console.error(err);
      }
    } else {
      // Metamask is not installed
      console.log("Please install metamask");
    }
  }

  // Get account info on load automatically
  const getCurrentWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          dispatch(addWallet(accounts[0]));
        } else {
          console.log("Please connect your wallet");
        }
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log("Please install metamask");
    }
  };

  // Account Change Listener
  const addWalletListener = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      window.ethereum.on("accountsChanged", (accounts) => {
        dispatch(addWallet(accounts[0]));
        console.log("Account changed to", accounts[0]);
      });
    } else {
      // Metamask is not installed
      dispatch(addWallet(""));
      console.log("Please install metamask.");
    }
  };

  // Fetch wallet from redux store
  const wallet = useSelector(selectWallet);

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/">ETH-PMS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="text-dark fw-semibold">Home</Nav.Link>
            <Button onClick={connectWallet}>{wallet.length > 0 ? `${wallet.slice(0,6)}...${wallet.slice(-6)}` : 'Connect Wallet'}</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

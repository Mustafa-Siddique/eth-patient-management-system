import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { NavbarTop } from "../components/NavbarTop";

export const Home = () => {
  return (
    <div>
      <NavbarTop />
      <Container id="userSelection">
        <div>
          <h2 className="mb-4">Select User Type </h2>
          <Row xs={1} md={2} lg={4} className="g-4 w-100">
            <Col className="d-flex justify-content-center">
              <Link
                to="/"
                className="btn btn-primary fs-5 text-uppercase fw-semibold"
                style={{ width: "200px" }}
              >
                Superuser
              </Link>
            </Col>
            <Col className="d-flex justify-content-center">
              <Link
                to="/"
                className="btn btn-primary fs-5 text-uppercase fw-semibold"
                style={{ width: "200px" }}
              >
                Hospital
              </Link>
            </Col>
            <Col className="d-flex justify-content-center">
              <Link
                to="/"
                className="btn btn-primary fs-5 text-uppercase fw-semibold"
                style={{ width: "200px" }}
              >
                Doctor
              </Link>
            </Col>
            <Col className="d-flex justify-content-center">
              <Link
                to="/"
                className="btn btn-primary fs-5 text-uppercase fw-semibold"
                style={{ width: "200px" }}
              >
                Patient
              </Link>
            </Col>
          </Row>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

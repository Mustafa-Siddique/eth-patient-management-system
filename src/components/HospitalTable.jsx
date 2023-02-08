import React from "react";
import { Table } from "react-bootstrap";

export const HospitalTable = ({ hospitals }) => {
  return (
    <div>
      {/* Mapping this table's rows with hospitals array */}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Hospital Name</th>
            <th>Address</th>
            <th>Contact</th>
            <th>Wallet</th>
          </tr>
        </thead>
        <tbody>
          {hospitals.map((hospital, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{hospital[2]}</td>
              <td>{hospital[0]}</td>
              <td>{hospital[1]}</td>
              <td>{hospital[3]}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

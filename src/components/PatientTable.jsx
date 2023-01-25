import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { MedicalRecordModal } from "./MedicalRecordModal";

export const PatientTable = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Patient's Name</th>
            <th>Hospital</th>
            <th>Wallet Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Patient 1</td>
            <td>Hospital 2</td>
            <td>0x573t34jg68ft8374gjg</td>
            <td>
              <Button onClick={() => setModalShow(true)}>Add Medical Record</Button>
              <MedicalRecordModal show={modalShow} onHide={() => setModalShow(false)} />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { getMedicalRecord } from "../web3/methods";
import { MedicalRecordModal } from "./MedicalRecordModal";

export const PatientTable = ({ patientArray }) => {
  // State to show/hide modal
  const [modalShow, setModalShow] = useState(false);
  const [medicalRecord, setMedicalRecord] = useState([]);

  // run a loop when patientArray is updated and get medical record from patientArray[5]
  useEffect(() => {
    setMedicalRecord([]);
    const _getMedicalRecord = async (patientArray) => {
      const medicalRecordIds = await patientArray[0][5];
      for (let i = 0; i < medicalRecordIds.length; i++) {
        const result = await getMedicalRecord(medicalRecordIds[i]);
        setMedicalRecord((medicalRecord) => [...medicalRecord, result]);
      }
    };
    _getMedicalRecord(patientArray);
  }, [patientArray]);

  return (
    <div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Patient's Name</th>
            <th>Doctor ID</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Wallet Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapping patients details with tr */}
          {patientArray.map((patient, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{patient[0]}</td>
              <td>{patient[3]}</td>
              <td>{patient[1]}</td>
              <td>{patient[2]}</td>
              <td>{patient[4]}</td>
              <td>
                <Button onClick={() => setModalShow(true)}>
                  Add Medical Record
                </Button>
                <MedicalRecordModal
                  patientId={patient[4]}
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* Medical History mapped with data of patient[5] */}
      <div className="mt-5">
        <h3>Medical History</h3>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Diagnosis</th>
              <th>Prescription</th>
              <th>Notes</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {/* Mapping medical history with tr */}
            {medicalRecord.map((record, index) => (
              <tr key={index}>
                <td>{record[0]}</td>
                <td>{record[1]}</td>
                <td>{record[2]}</td>
                <td>{record[3]}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

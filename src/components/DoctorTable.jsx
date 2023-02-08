import React from 'react'
import { Table } from 'react-bootstrap'

export const DoctorTable = ({doctors}) => {
  return (
    <div>
        <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Doctor's Name</th>
            <th>Hospital ID</th>
            <th>Wallet Address</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapping doctors details with tr */}
          {doctors.map((doctor, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{doctor[0]}</td>
              <td>{doctor[1]}</td>
              <td>{doctor[2]}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

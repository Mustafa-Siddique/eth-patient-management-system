import React from 'react'
import { Table } from 'react-bootstrap'

export const DoctorTable = () => {
  return (
    <div>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Doctor's Name</th>
            <th>Hospital</th>
            <th>Wallet Address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Doctor 1</td>
            <td>Hospital 2</td>
            <td>0x573t34jg68ft8374gjg</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Doctor 1</td>
            <td>Hospital 2</td>
            <td>0x573t34jg68ft8374gjg</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Doctor 1</td>
            <td>Hospital 2</td>
            <td>0x573t34jg68ft8374gjg</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Doctor 1</td>
            <td>Hospital 2</td>
            <td>0x573t34jg68ft8374gjg</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

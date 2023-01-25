import React from "react";
import { Table } from "react-bootstrap";

export const HospitalTable = () => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Hospital Name</th>
            <th>Address</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Hospital 1</td>
            <td>Address</td>
            <td>+9223 2314 1231</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Hospital 2</td>
            <td>Address</td>
            <td>+9223 2314 1231</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Hospital 3</td>
            <td>Address</td>
            <td>+9223 2314 1231</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Hospital 4</td>
            <td>Address</td>
            <td>+9223 2314 1231</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

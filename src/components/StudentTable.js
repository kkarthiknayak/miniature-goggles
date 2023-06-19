import React from "react";
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap/esm";

const StudentTable = ({students,deleteUser}) => {
  return (
    <div>
      <Table class="Table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student,index) => (
            <tr>
            <th scope="row">{index}</th>
            <td>{student.studentName}</td>
            <td>{student.email}</td>
            <td>{student.phoneNumber}</td>
            <button type="submit" onClick={() => deleteUser(index)}>Delete</button>
          </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default StudentTable;

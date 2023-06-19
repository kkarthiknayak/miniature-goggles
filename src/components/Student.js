import React from "react";
import { useState } from "react";
import { Button, Card } from "react-bootstrap/esm";
import "../css/black-background.css";
import "../css/card-wrapper.css";
import { Form } from "react-bootstrap";

const AddStudentForm = ({ addStudentInfo }) => {
  const [email, setEmail] = useState("");
  const [studentName, setName] = useState("");
  const [phoneNumber, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudentInfo(email, studentName, phoneNumber);
    setEmail("");
    setName("");
    setPhone("");
  };

  return (
    <div className="card-wrapper">
      <Card
        
        style={{ width: "400px", height: "300px"  }}
      >
        <Card.Body>
          <Card.Title>Student Info </Card.Title>
          <Card.Text>
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Enter you Mail-ID</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ex:example@something.com"
                />

                <Form.Label>Enter you Name</Form.Label>
                <Form.Control
                  type="name"
                  name="student_name"
                  value={studentName}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex:Rahul"
                />
                <Form.Label>Enter you Phone Number</Form.Label>
                <Form.Control
                  type="contact"
                  name="contact"
                  value={phoneNumber}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Ex:8475895461"
                />
              </Form.Group>

              <button type="submit" onClick={handleSubmit}>Submit</button>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddStudentForm;

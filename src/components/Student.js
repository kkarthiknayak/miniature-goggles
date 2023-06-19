import React from "react";
import { useState } from "react";
import { InputGroup } from "react-bootstrap";
import { Card } from "react-bootstrap/esm";
import { Button } from "react-bootstrap/lib/InputGroup";




const AddStudentForm = ({addStudentInfo}) => {

    const [email,setEmail] = useState('');
    const [studentName,setName] = useState('');
    const [phoneNumber,setPhone] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addStudentInfo(email,studentName,phoneNumber);
        setEmail('');
        setName('');
        setPhone('');
    }

    return(
        <div>

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    <form onSubmit={handleSubmit}>
              Email:  <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              Name: <input type="name" name="student_name" value={studentName} onChange={(e) => setName(e.target.value)} />
              Phone Number:<input type="contact" name="contact" value={phoneNumber} onChange={(e) => setPhone(e.target.value)} />
              <Button type="submit">Submit</Button>
            </form>
                    </Card.Text>
                </Card.Body> 
            </Card>
            
        </div>
    );
}

export default AddStudentForm;
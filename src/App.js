//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import AddStudentForm from './components/Student';

function App() {

  const [students,setStudents] = useState([]);

  useEffect(() => {
    fetch("/actuator/health").then(console.log)
  });


  const addStudentInfo = (email,studentName,phoneNumber) => {
    const newStudent = {email,studentName,phoneNumber}
    setStudents([...students,newStudent])
    console.log(students)
  }
  
  return (
    <div className="App">
      <AddStudentForm addStudentInfo={addStudentInfo} />
    </div>
  );
}

export default App;

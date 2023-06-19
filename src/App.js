//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import AddStudentForm from './components/Student';
import StudentTable from './components/StudentTable';

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

  const deleteUser = (index) => {
    const updateduser = [...students];
    updateduser.splice(index,1);
    setStudents(updateduser);

  }
  
  return (
    <div className="App">
      <AddStudentForm addStudentInfo={addStudentInfo} />
      <StudentTable students={students} deleteUser={deleteUser}/>
    </div>
  );
}

export default App;

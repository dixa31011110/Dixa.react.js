import React from 'react';
import StudentForm from './StudentForm';

const App = () => {
  return (
    <div style={{ border: "2px solid black", margin: "auto", height: "430px", width: "40%", margin: "auto" }}>
      <h1 style={{ display: "flex", justifyContent: "center", textAlign: "center", fontFamily: "monospace" }}> Student Information Form</h1><hr />
      <StudentForm />
    </div>
  );
};

export default App;

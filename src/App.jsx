import {React, useState} from 'react'
import Assignment from './Assignment.jsx'
import Calendar from './Calendar.jsx';
import './App.css';


const App = () => {

  const [displayAssignmentPopup, setDisplayAssignmentPopup] = useState(false); 
  const [assignments, setAssignments] = useState([]);

  const [assignmentName, setAssignmentName] = useState("");
  const [assignmentDate, setAssignmentDate] = useState("");
  const [assignmentDescription, setAssignmentDescription] = useState("");

  const addAssignment = () => {

    if(assignmentName == "" || assignmentDate == "" || assignmentDescription == "" ){
      alert("Please fill out all the fields before submitting the assignment, thank you.");
    } else {
        const newAssignment = {
          name: assignmentName,
          date: assignmentDate,
          description: assignmentDescription
        };

        const updatedAssignments = [...assignments, newAssignment];
        setAssignments(updatedAssignments);

        setAssignmentName("");
        setAssignmentDate("");
        setAssignmentDescription("");
        setDisplayAssignmentPopup(!displayAssignmentPopup);
    }
  }

  return (
    <div className='wrapper'>
        <nav>
          Assignment Tracker
        </nav>
        <div className="leftCol">
          <div className="dashboard">
            <button onClick={() => setDisplayAssignmentPopup(!displayAssignmentPopup)}>Add Assignment</button>
            <button>filter by</button>
          </div>
          <div className="assignmentsList">
            {assignments.length == 0 ? "no assignments added yet" : (assignments.map((assignment) => (
              <Assignment name={assignment.name} date={assignment.date} description={assignment.description} />
            )))}
          </div>
        </div>
        <div className="rightCol">
          <div className="calendar">
            <Calendar/>
          </div>
        </div>

        {displayAssignmentPopup && <div className='addAssignmentPopup'>
          <div className="addAssignmentContainer">
            <p className='assignmentTitle'>Add Your Assignment</p>
            <div className='x' onClick={() => setDisplayAssignmentPopup(!displayAssignmentPopup)}>X</div>
            <input type="text" placeholder='Enter Assignment Name' value={assignmentName} onChange={(e) => setAssignmentName(e.target.value)}/>
            <input type="date" value={assignmentDate} onChange={(e) => setAssignmentDate(e.target.value)} />
            <textarea placeholder='Enter Assignment Description' value={assignmentDescription} onChange={(e) => setAssignmentDescription(e.target.value)} />
            <button onClick={() => addAssignment()}>Submit</button>
          </div>
        </div>}

    </div>
  )
}

export default App


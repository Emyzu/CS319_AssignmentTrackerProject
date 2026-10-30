import {React, useState} from 'react'
import Assignment from './Assignment.jsx'
import './App.css';


const App = () => {



  return (
    <div className='wrapper'>
        <nav>
          Assignment Tracker
        </nav>
        <div className="rightCol">
          <div className="dashboard">
            <button>Add Assignment</button>
            <button>filter by</button>
          </div>
        </div>
        <div className="leftCol">
          <div className="calendar">
            Calendar
          </div>
        </div>

        <div className='addAssignmentPopup'>
          <div className="addAssignment">
            <p>X</p>
            <input type="text" placeholder='Enter Assignment Name' />
            <input type="date" />
            <textarea placeholder='Enter Assignment Description' />
            <button>Submit</button>
          </div>
        </div>

    </div>
  )
}

export default App
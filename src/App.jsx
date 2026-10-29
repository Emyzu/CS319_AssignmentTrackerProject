import {React, useState} from 'react'
import Assignment from './Assignment.jsx'
import './App.css';

const App = () => {



  return (
    <div className='section'>
      <div className="addAssignment">
        <input type="text" placeholder='Enter Assignment Name' />
        <input type="date" />
        <textarea placeholder='Enter Assignment Description' />
        <button>Submit</button>
      </div>
    </div>
  )
}

export default App
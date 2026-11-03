import React from 'react'

const Assignment = ({name, date, description}) => {
  return (
    <div className='assignmentContainer'>
      <div className="assignmentDetails">
        <div className="assignmentHeader">{name}</div>
        <div className="assignmentDueDate">{date}</div>
      </div>
      <div className="assignmentDescription">{description}</div>
    </div>
  )
}

export default Assignment
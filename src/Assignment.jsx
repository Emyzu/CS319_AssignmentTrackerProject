import React from 'react'

const Assignment = ({name, date, description, dotColor}) => {
  return (
    <div className='assignmentContainer'>
      <div className="assignmentDetails">
        <div className="assignmentHeader">{name}</div>
        <div className="assignmentDueDate"><span className='assignmentDueDateDot' style={{backgroundColor: dotColor}}></span>{date}</div>
      </div>
      <div className="assignmentDescription">{description}</div>
    </div>
  )
}

export default Assignment
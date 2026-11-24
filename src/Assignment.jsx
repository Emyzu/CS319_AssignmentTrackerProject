import React from 'react'
import DueDateDot from './DueDateDot'

const Assignment = ({name, date, description, dotColor}) => {
  return (
    <div className='assignmentContainer'>
      <div className="assignmentDetails">
        <div className="assignmentHeader">{name}</div>
        <div className="assignmentDueDate"><DueDateDot className={"assignmentDueDateDot"} dotColor={dotColor}> </DueDateDot>{date}</div>
      </div>
      <div className="assignmentDescription">{description}</div>
    </div>
  )
}

export default Assignment


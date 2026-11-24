import {React, useState} from 'react'

const DueDateDot = ({className, dotColor}) => {
  return (
    <span className={className} style={{backgroundColor: dotColor}}></span>
  )
}

export default DueDateDot
import {React, useState} from 'react'

const Calendar = () => {

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  return (
    <div className='calendarContainer'>
        <div className="calendarButtons">
          <ion-icon name="arrow-back-sharp"></ion-icon>
          <p>{monthOfYear[currentMonth]} {currentYear}</p>
          <ion-icon name="arrow-forward-sharp"></ion-icon>
        </div>
        <div className="calendarDaysContainer">
          <div className="calendarDaysNames">
            {daysOfWeek.map((day) => <span key={day}>{day}</span>)}
          </div>
          <div className="calendarDays">
            {[...Array(firstDayOfMonth).keys()].map((_, index) => ( <span key={`empty-${index}`} /> ))}
            {[...Array(daysInMonth).keys()].map((day) => <span key={day + 1}> {day+1} </span>)}
          </div>
        </div>
    </div>
  )
}

export default Calendar
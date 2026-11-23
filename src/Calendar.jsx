import {React, useState} from 'react'

const Calendar = ({assignments = [], clickedDay}, ) => {

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const prevMonth = () => {
    setCurrentMonth((prevMonth) => ( prevMonth === 0 ? 11 : prevMonth - 1 ));
    setCurrentYear((prevYear) => (currentMonth === 0 ? prevYear - 1 : prevYear));
  }

  const nextMonth = () => {
    setCurrentMonth((prevMonth) => ( prevMonth === 11 ? 0 : prevMonth + 1 ));
    setCurrentYear((prevYear) => (currentMonth === 11 ? prevYear + 1 : prevYear));
  }
  
  const isAssignmentDue = (day) => {
    const monthAsString = String(currentMonth + 1).padStart(2, '0');
    const dayAsString = String(day).padStart(2, '0');
    const fullDateString = `${currentYear}-${monthAsString}-${dayAsString}`;

    return assignments.find((assignment) => assignment.date === fullDateString);
  }

  const clickedDayActive = (day) => {
    const monthAsString = String(currentMonth + 1).padStart(2, '0');
    const dayAsString = String(day).padStart(2, '0');
    const fullDateString = `${currentYear}-${monthAsString}-${dayAsString}`;

    clickedDay(fullDateString);
  }

  return (
    <div className='calendarContainer'>
        <div className="calendarButtons">
          <ion-icon name="arrow-back-sharp" onClick={prevMonth}></ion-icon>
          <p>{monthOfYear[currentMonth]} {currentYear}</p>
          <ion-icon name="arrow-forward-sharp" onClick={nextMonth}></ion-icon>
        </div>
        <div className="calendarDaysContainer">
          <div className="calendarDaysNames">
            {daysOfWeek.map((day) => <span key={day}>{day}</span>)}
          </div>
          <div className="calendarDays">
            {[...Array(firstDayOfMonth).keys()].map((_, index) => ( <span key={`empty-${index}`} /> ))}
            {[...Array(daysInMonth).keys()].map((day) => <span key={day + 1} className='day' onClick={() => clickedDayActive(day+1)}> {day+1} {isAssignmentDue(day + 1) && <span className="assignmentDot" style={{backgroundColor: isAssignmentDue(day + 1).dotColor}}></span>}</span>)}
          </div>
        </div>
    </div>
  )
}

export default Calendar
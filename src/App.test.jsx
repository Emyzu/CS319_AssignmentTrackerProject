import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, test } from "vitest";
import '@testing-library/jest-dom';

import DueDateDot from "./DueDateDot";
import Calendar from "./Calendar";
import App from "./App";

describe('Tests for the Assignment Tracker', () =>{
    it('renders the due date dot with the correct class and color', () => {
        const {container} = render(<DueDateDot className="assignmentDot" dotColor={"#00FF00"} ></DueDateDot>);
        const dot = container.querySelector(".assignmentDot");
        expect(dot).toBeInTheDocument();
        expect(dot).toHaveStyle({backgroundColor: "#00FF00"});
    })

    it('displays a dot on the correct date, and has the clicked date formatted correctly', () => {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = String(currentDate.getMonth() + 1).padStart(2, '0');
        const dueDate = `${currentYear}-${currentMonth}-23`;

        const testAssignments = [{name: "Sprint 2", date: dueDate, description: "Complete Sprint 2", dotColor: "#00FF00"}];
        const dayClick = vi.fn();

        const {container} = render (
            <Calendar assignments={testAssignments} clickedDay={dayClick}></Calendar>
        );

        expect(container.querySelector(".assignmentDot")).toBeInTheDocument();
        fireEvent.click(screen.getByText("23"));
        expect(dayClick).toHaveBeenCalledWith(dueDate);
    
    });

    it('blocks submission of an assignment with any empty fields', () => {
        const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});
        render(<App/>);

        fireEvent.click(screen.getByText("Add Assignment"));
        fireEvent.click(screen.getByText("Submit"));
        expect(alertMock).toHaveBeenCalledTimes(1);
        expect(screen.getByText("no assignments added yet")).toBeInTheDocument();
        alertMock.mockRestore();

    });
});


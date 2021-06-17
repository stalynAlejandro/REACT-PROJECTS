import * as React from "react";
import * as ReactDOM from "react-dom";

import DatePicker from "../index";

let container: any;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
});

describe("date picker simple", () => {
    it("renders without crashing", () => {
        ReactDOM.render(<DatePicker />, container);

        const datePickerSimple = container.querySelector(
            ".datepicker-simple-input__main-container"
        );

        expect(datePickerSimple).not.toBe(null);
    });

    it("renders calendar when click on input", () => {
        ReactDOM.render(<DatePicker />, container);

        const inputElement = container.querySelector(
            ".datepicker-simple-input__input"
        );

        inputElement.dispatchEvent(new MouseEvent("click", { bubbles: true }));

        const calendarElement = container.querySelector(
            ".calendar__main-container"
        );

        expect(calendarElement).not.toBe(null);
    });

    it("input changes correctly after select a day on calendar", () => {
        ReactDOM.render(<DatePicker />, container);

        const inputElement = container.querySelector(
            ".datepicker-simple-input__input"
        );

        inputElement.dispatchEvent(new MouseEvent("click", { bubbles: true }));

        const dayCalendarElement = container.querySelector(
            ".calendar__single-day"
        );

        dayCalendarElement.dispatchEvent(
            new MouseEvent("click", { bubbles: true })
        );

        expect(inputElement.value).toMatch(/02/);
    });
});

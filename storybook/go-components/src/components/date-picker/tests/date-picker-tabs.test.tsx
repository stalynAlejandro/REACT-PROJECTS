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

describe("date picker tabs", () => {
    it("renders without crashing", () => {
        ReactDOM.render(<DatePicker type="tabs" />, container);

        const datePickerTabs = container.querySelector(
            ".datepicker-tabs-input__main-container"
        );

        expect(datePickerTabs).not.toBe(null);
    });

    it("renders calendar when click on input", () => {
        ReactDOM.render(<DatePicker type="tabs" />, container);

        const inputElement = container.querySelector(
            ".datepicker-tabs-input__input"
        );

        inputElement.dispatchEvent(new MouseEvent("click", { bubbles: true }));

        const calendarElement = container.querySelector(
            ".calendar__main-tabs-container"
        );

        expect(calendarElement).not.toBe(null);
    });
});

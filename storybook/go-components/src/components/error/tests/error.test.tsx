import * as React from "react";
import * as ReactDOM from "react-dom";

import Error from "../index";

let container: any;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
});

const customErrorMessage = "Ups! ha ocurrido un error";

describe("error", () => {
    it("renders without crashing", () => {
        ReactDOM.render(<Error />, container);

        const kpiIndicator = container.querySelector(".error__main-container");

        expect(kpiIndicator).not.toBe(null);
    });

    it("renders with custom message", () => {
        ReactDOM.render(<Error message={customErrorMessage} />, container);

        const errorText = container.querySelector(".error__main-container");

        expect(errorText.textContent).toBe(customErrorMessage);
    });
});

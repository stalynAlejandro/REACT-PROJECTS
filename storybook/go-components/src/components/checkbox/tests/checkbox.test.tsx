import * as React from "react";
import * as ReactDOM from "react-dom";

import Checkbox from "../index";

let container: any;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
});

describe("input", () => {
    it("renders without crashing", () => {
        ReactDOM.render(
            <Checkbox
                label="test"
                size="normal"
                disabled={false}
            />,
            container
        );

        const componentContainer = container.querySelector(
            ".checkbox__main"
        );

        expect(componentContainer).not.toBe(null);
    });

    it("label corresponds to props.label", () => {
        const labelValue = "myInput";

        ReactDOM.render(
            <Checkbox
                label={labelValue}
                size="normal"
                disabled={false}
            />,
            container
        );

        const inputLabel = container.querySelector(".checkbox-title");

        expect(inputLabel.textContent).toBe(labelValue);
    });
});

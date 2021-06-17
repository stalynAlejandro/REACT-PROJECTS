import * as React from "react";
import * as ReactDOM from "react-dom";

import DefaultContainer from "../index";

let container: any;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
});

describe("defaultContainer", () => {
    it("renders without crashing", () => {
        ReactDOM.render(<DefaultContainer />, container);

        const defaultContainer = container.querySelector(".default-container");

        expect(defaultContainer).not.toBe(null);
    });
});

import * as React from "react";
import * as ReactDOM from "react-dom";

import Container from "../index";

let container: any;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
});

describe("container", () => {
    it("should render without crashing", () => {
        ReactDOM.render(<Container />, container);

        const html = container.querySelector(".container-menu");
        expect(html).not.toBe(null);
    });
});

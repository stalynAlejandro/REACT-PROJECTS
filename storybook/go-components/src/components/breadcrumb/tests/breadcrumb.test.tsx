import * as React from "react";
import * as ReactDOM from "react-dom";

import Breadcrumb from "../index";

let container: any;
const breadcumbs = ["My Operation", "Smartmetering", "Dashboard"];

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
});

describe("breadcrumb", () => {
    it("should render without crashing", () => {
        ReactDOM.render(<Breadcrumb breadcumbs={breadcumbs} />, container);

        const breadcrumb = container.querySelector(".breadcrumb-item");
        expect(breadcrumb).not.toBe(null);
    });

    it("Should render three breadcrumb items", () => {
        ReactDOM.render(<Breadcrumb breadcumbs={breadcumbs} />, container);
        const breadcrumbItems = container.querySelectorAll(".breadcrumb-item");
        expect(breadcrumbItems.length).toBe(5);
    });
});

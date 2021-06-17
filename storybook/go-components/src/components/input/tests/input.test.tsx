import * as React from "react";
import * as ReactDOM from "react-dom";

import Input from "../index";

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
            <Input
                onChangeInput={(value) => console.log(value)}
                value="test"
                label="test"
            />,
            container
        );

        const kpiIndicator = container.querySelector(
            ".custom-input__main-container"
        );

        expect(kpiIndicator).not.toBe(null);
    });

    it("label corresponds to props.label", () => {
        const labelValue = "myInput";

        ReactDOM.render(
            <Input
                onChangeInput={(value) => console.log(value)}
                value="test"
                label={labelValue}
            />,
            container
        );

        const inputLabel = container.querySelector(".custom-input__label");

        expect(inputLabel.textContent).toBe(labelValue);
    });

    it("writed text corresponds to his value", () => {
        const typedText = "my example text";

        ReactDOM.render(
            <Input onChangeInput={(value) => console.log(value)} value="" />,
            container
        );

        const inputElement = container.querySelector(
            ".custom-input__main-input"
        );

        inputElement.setAttribute("value", typedText);
        expect(inputElement.value).toBe(typedText);
    });
});

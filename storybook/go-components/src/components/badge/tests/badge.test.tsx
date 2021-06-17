import * as React from "react";
import * as ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import  Badge from "../index";
import BellLigth from "../../../stories/badge/icons/bell-light";

let container: any = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
    container = null;
});

describe("badge", () => {
    it("It Renders", () => {
        act(() => {
            ReactDOM.render(
                <Badge
                    color="blue"
                    size="s"
                    number={10}
                />,
                container
            );
        });

        const rootElement = container.querySelector(".go-badge");
        expect(rootElement).not.toBe(null);
    });

    it("Check Values", () => {
        act(() => {
            ReactDOM.render(
                <Badge
                    size="l"
                    color="red"
                    number={1}
                    icon={<BellLigth />}
                />,
                container
            );
        });

        // Check text
        let text = container.querySelector(".go-badge");
        expect(text.textContent).toBe("1");
        // Check svg
        let element = container.querySelector("svg");
        expect(element).not.toBe(null);
        // Check class name
        let sizeElement = container.querySelector(".l");
        expect(sizeElement).not.toBe(null);
        // Check more class name
        let colorClassName = container.querySelector(".go-badge__red");
        expect(colorClassName).not.toBe(null);
        // Check the other class don't exist
        let falseColorClassName = container.querySelector(".go-badge__blue");
        expect(falseColorClassName).toBe(null);
        // Check other sizes
        let mFalseElement = container.querySelector(".m");
        expect(mFalseElement).toBe(null);
        let sFalseElement = container.querySelector(".s");
        expect(sFalseElement).toBe(null);
    });
});
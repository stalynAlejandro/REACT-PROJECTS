import * as React from "react";
import * as ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Button from "../index";
import ExclamationCircle from "../../../stories/button/icons/exclamationcircle-icon";

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

describe("button", () => {
    it("It Renders", () => {
        const nullFunction = () => {};
        act(() => {
            ReactDOM.render(
                <Button
                    textButton={"Click Me"}
                    color={"blue"}
                    css={""}
                    disabled={false}
                    iconButton={<ExclamationCircle />}
                    onClickedButton={nullFunction}
                    size={"l"}
                    ctaButton={false}
                />,
                container
            );
        });

        const rootElement = container.querySelector("button.go-button");
        expect(rootElement).not.toBe(null);
    });

    it("Check Values", () => {
        const nullFunction = () => {};
        act(() => {
            ReactDOM.render(
                <Button
                    textButton={"Click Me"}
                    color={"blue"}
                    css={""}
                    disabled={false}
                    iconButton={<ExclamationCircle />}
                    onClickedButton={nullFunction}
                    size={"l"}
                    ctaButton={false}
                />,
                container
            );
        });

        // Check text
        let text = container.querySelector("button.go-button span");
        expect(text.textContent).toBe("Click Me");
        // Check icon
        let icon = container.querySelector("button.go-button svg");
        expect(icon).not.toBe(null);
    });

    it("Check outputs", () => {
        const handleOnClicked = jest.fn();

        act(() => {
            ReactDOM.render(
                <Button
                    textButton={"Click Me"}
                    color={"blue"}
                    css={""}
                    disabled={false}
                    iconButton={<ExclamationCircle />}
                    onClickedButton={handleOnClicked}
                    size={"l"}
                    ctaButton={false}
                />,
                container
            );
        });

        // Check clicked
        container
            .querySelector("button.go-button")
            .dispatchEvent(new MouseEvent("click", { bubbles: true }));
        expect(handleOnClicked).toBeCalled();
    });
});

import * as React from "react";
import * as ReactDOM from "react-dom";

import LinearProgressBar from "../index";

let container: any;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
});

const linearProgressBarValue = 56;
const linearProgressBarLabel = "Progreso";
const linearProgressBarColor = "lightgreen";

describe("linearprogressbar", () => {
    it("renders without crashing", () => {
        ReactDOM.render(
            <LinearProgressBar
                percentValue={linearProgressBarValue}
                color={linearProgressBarColor}
                height={1}
                withLabel={false}
                labelName={linearProgressBarLabel}
            />,
            container
        );

        const linearProgressBar = container.querySelector(
            ".linear-progress-bar"
        );

        expect(linearProgressBar).not.toBe(null);
    });

    it("value and label checking", () => {
        ReactDOM.render(
            <LinearProgressBar
                percentValue={linearProgressBarValue}
                color={linearProgressBarColor}
                height={1}
                withLabel
                labelName={linearProgressBarLabel}
            />,
            container
        );

        const linearProgressbarLabelName = container.querySelector(
            ".linear-progress-bar__label-name"
        );
        const linearProgressbarLabelValue = container.querySelector(
            ".linear-progress-bar__label-value"
        );

        expect(linearProgressbarLabelName.textContent).toBe(
            linearProgressBarLabel
        );
        expect(linearProgressbarLabelValue.textContent).toBe(
            `${linearProgressBarValue}%`
        );
    });

    it("colored progressbar has correct value and color", () => {
        ReactDOM.render(
            <LinearProgressBar
                percentValue={linearProgressBarValue}
                color={linearProgressBarColor}
                height={1}
                withLabel
                labelName={linearProgressBarLabel}
            />,
            container
        );

        const filledBar = container.querySelector(".filled");

        expect(filledBar.style.width).toBe(`${linearProgressBarValue}%`);
        expect(filledBar.className).toEqual(
            expect.stringContaining(linearProgressBarColor)
        );
    });
});

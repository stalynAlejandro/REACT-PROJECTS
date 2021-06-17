import * as React from "react";
import * as ReactDOM from "react-dom";

import ProgressLegend from "../index";

let container: any;

type RangeType = {
    color: string;
    value: number;
};

const rangeColors: RangeType[] = [
    { color: "#E27272", value: 0 },
    { color: "#FDAD54", value: 20 },
    { color: "#FDFF8B", value: 40 },
    { color: "#8DEA9E", value: 60 },
    { color: "#00CCBC", value: 80 },
    { color: "", value: 100 },
];

const locale = "en-GB";
const title = "% communication"

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    ReactDOM.unmountComponentAtNode(container)
})

describe("progress-legend", () => {
    it("should render without crashing", () => {
        ReactDOM.render(
            <ProgressLegend locale={locale} rangeColors={rangeColors} />,container
        )

        const progressLegendDiv = container.querySelector(".progress-legend");
        expect(progressLegendDiv).not.toBe(null)
    });

    it("should show specified title", () => {
        ReactDOM.render(
            <ProgressLegend locale={locale} rangeColors={rangeColors} />,container
        )
        const progressLegendTitle = container.querySelector(".progress-legend .progress-legend-container .progress-title");

        expect(progressLegendTitle.textContent).toBe(title)
    });

    it("should display rangecolor values given in props", () => {

        ReactDOM.render(
            <ProgressLegend locale={locale} rangeColors={rangeColors} />,container
        )
        const progressLegendRangeColors = container.querySelectorAll(".progress-colors .color-bar span")[1];
        
        expect(progressLegendRangeColors.textContent).toBe(rangeColors[1].value.toString())
    });
})
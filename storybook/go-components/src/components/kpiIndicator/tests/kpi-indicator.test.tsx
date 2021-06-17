import * as React from "react";
import * as ReactDOM from "react-dom";

import KpiIndicator from "../index";

let container: any;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
});

describe("kpi-indicator", () => {
    it("renders without crashing", () => {
        ReactDOM.render(
            <KpiIndicator value={23} label="value test" />,
            container
        );

        const kpiIndicator = container.querySelector(
            ".kpi-indicator__main-container"
        );

        expect(kpiIndicator).not.toBe(null);
    });

    it("value and label checking", () => {
        ReactDOM.render(
            <KpiIndicator value={23} label="value test" />,
            container
        );

        const kpiLabel = container.querySelector(".kpi-indicator__label");
        const kpiValue = container.querySelector(".kpi-indicator__value");

        expect(kpiLabel.textContent).toBe("value test");
        expect(kpiValue.textContent).toBe("23");
    });
});

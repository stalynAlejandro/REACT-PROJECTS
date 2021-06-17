import * as React from "react";
import * as ReactDOM from "react-dom";

import Legend from "../index";

let container: any;
const legendTitle = "Map legend";
const legendItems = [
    { text: "< 50%", color: "rgb(227, 114, 114)" },
    { text: "50% - 90%", color: "rgb(227, 114, 114)" },
    { text: "> 90%", color: "rgb(146, 192, 137)" },
]
const header = true;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    ReactDOM.unmountComponentAtNode(container)
})

describe("legend", () => {
    it("should render without crashing", () => {
        ReactDOM.render(
            <Legend title={legendTitle} items={legendItems} header={header} />, container
        )

        const legend = container.querySelector(".legend__container");
        expect(legend).not.toBe(null)
    })

    it("Should render title in header", () => {
        ReactDOM.render(
            <Legend title={legendTitle} items={legendItems} header={header} />, container
        )

        const headerDiv = container.querySelector(".title .text");
        expect(headerDiv.textContent).toBe(legendTitle)

    })

    it("Should render array items props", () => {
        ReactDOM.render(
            <Legend title={legendTitle} items={legendItems} header={header} />, container
        )

        const legendItemsDivText = container.querySelectorAll(".item .text")[1];
        const legendItemsDivColor = container.querySelectorAll(".item .color")[2];
        expect(legendItemsDivText.textContent).toContain(legendItems[1].text)
        expect(legendItemsDivColor.style["_values"].background).toBe(legendItems[2].color)
    })
})
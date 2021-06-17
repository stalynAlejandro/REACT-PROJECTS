import * as React from "react";
import * as ReactDOM from "react-dom";

import MapLegend from "../index";

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

describe("MapLegend", () => {

    it("should render without crashing", () => {
        ReactDOM.render(
            <MapLegend title={legendTitle} items={legendItems} header={header} />, container
        )

        const mapLegend = container.querySelector(".map-legend");
        expect(mapLegend).not.toBe(null)
    })

    it("should render Legend component", () => {
        ReactDOM.render(
            <MapLegend title={legendTitle} items={legendItems} header={header} />, container
        )

        const legend = container.querySelector(".legend__container");
        expect(legend).not.toBe(null)
    })

})
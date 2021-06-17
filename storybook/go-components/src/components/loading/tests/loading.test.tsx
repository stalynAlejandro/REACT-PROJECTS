import * as React from "react";
import * as ReactDOM from "react-dom";

import Loading from "../index";

let container: any;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
});

const customLoadingMessage = "Cargando, por favor espere";

describe("loading", () => {
    it("renders without crashing", () => {
        ReactDOM.render(<Loading />, container);

        const kpiIndicator = container.querySelector(".loading-main-container");

        expect(kpiIndicator).not.toBe(null);
    });

    it("renders with custom message", () => {
        ReactDOM.render(<Loading message={customLoadingMessage} />, container);

        const loadingText = container.querySelector(".loading-message");

        expect(loadingText.textContent).toBe(customLoadingMessage);
    });

    it("renders css dots without crashing", () => {
        ReactDOM.render(<Loading />, container);

        const cssAnimationDots = container.querySelector(".lds-ellipsis");

        expect(cssAnimationDots).not.toBe(null);
    });
});

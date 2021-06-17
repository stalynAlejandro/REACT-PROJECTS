import * as React from "react";
import * as ReactDOM from "react-dom";

import Pagination from "../index";

let container: any;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
});

describe("pagination", () => {
    it("renders without crashing", () => {
        ReactDOM.render(
            <Pagination
                locale={"es-ES"}
                onSelectedPage={(page: number) => console.log(page)}
                totalItems={250}
                itemsPerPage={10}
                page={0}
            />,
            container
        );

        const pagination = container.querySelector(".table__pagination");

        expect(pagination).not.toBe(null);
    });

    it("renders with correct locale language", () => {
        ReactDOM.render(
            <Pagination
                locale={"en-EN"}
                onSelectedPage={(page: number) => console.log(page)}
                totalItems={250}
                itemsPerPage={10}
                page={0}
            />,
            container
        );

        const paginationButton = container.querySelector(".table__pageButton");

        expect(paginationButton?.textContent).toBe("Back");
    });

    it("renders with disbale props", () => {
        ReactDOM.render(
            <Pagination
                locale={"en-EN"}
                onSelectedPage={(page: number) => console.log(page)}
                totalItems={250}
                itemsPerPage={10}
                page={0}
                disabled
            />,
            container
        );

        const paginationButton = container.querySelector(".table__pageButton");

        expect(paginationButton.className).toMatch(/disabled/);
    });
});

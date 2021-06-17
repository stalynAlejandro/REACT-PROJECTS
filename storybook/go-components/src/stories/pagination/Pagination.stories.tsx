import React from "react";
import { withKnobs, select, number, boolean } from "@storybook/addon-knobs";
import Pagination from "../../components/pagination";

export default {
    title: "Pagination",
    component: Pagination,
    decorators: [withKnobs],
};

export const LargePagination = () => {
    const languages: Array<string> = ["en-GB", "en-US", "es-ES", "ca-ES"];
    const language: string = select("locale", languages, languages[0]);
    const totalItems: number = number("totalItems", 50);
    const itemsPerPage: number = number("itemsPerPage", 5);
    const currentPage: number = number("currentPage", 0);
    const infinite = boolean("infinite", false);

    return (
        <Pagination
            locale={language}
            onSelectedPage={(page: number) => console.log(page)}
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            page={currentPage}
            size="l"
            infinite={infinite}
        />
    );
};

export const MiddlePagination = () => {
    const languages: Array<string> = ["en-GB", "en-US", "es-ES", "ca-ES"];
    const language: string = select("locale", languages, languages[0]);
    const totalItems: number = number("totalItems", 50);
    const itemsPerPage: number = number("itemsPerPage", 5);
    const currentPage: number = number("currentPage", 0);
    const infinite = boolean("infinite", false);

    return (
        <Pagination
            locale={language}
            onSelectedPage={(page: number) => console.log(page)}
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            page={currentPage}
            infinite={infinite}
        />
    );
};

export const SmallPagination = () => {
    const languages: Array<string> = ["en-GB", "en-US", "es-ES", "ca-ES"];
    const language: string = select("locale", languages, languages[0]);
    const totalItems: number = number("totalItems", 50);
    const itemsPerPage: number = number("itemsPerPage", 5);
    const currentPage: number = number("currentPage", 0);
    const infinite = boolean("infinite", false);

    return (
        <Pagination
            locale={language}
            onSelectedPage={(page: number) => console.log(page)}
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            page={currentPage}
            size="s"
            infinite={infinite}
        />
    );
};

export const DisabledPagination = () => {
    const languages: Array<string> = ["en-GB", "en-US", "es-ES", "ca-ES"];
    const language: string = select("locale", languages, languages[0]);
    const totalItems: number = number("totalItems", 50);
    const itemsPerPage: number = number("itemsPerPage", 5);
    const currentPage: number = number("currentPage", 0);
    const infinite = boolean("infinite", false);

    return (
        <Pagination
            locale={language}
            onSelectedPage={(page: number) => console.log(page)}
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            page={currentPage}
            disabled
            infinite={infinite}
        />
    );
};

export const InfinitePaginaton = () => {
    const languages: Array<string> = ["en-GB", "en-US", "es-ES", "ca-ES"];
    const language: string = select("locale", languages, languages[0]);
    const totalItems: number = number("totalItems", 50);
    const itemsPerPage: number = number("itemsPerPage", 5);
    const currentPage: number = number("currentPage", 0);
    const infinite = boolean("infinite", true);

    return (
        <Pagination
            locale={language}
            onSelectedPage={(page: number) => console.log(page)}
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            page={currentPage}
            disabled
            infinite={infinite}
        />
    );
};

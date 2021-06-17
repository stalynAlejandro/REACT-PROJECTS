import React from "react";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";
import SelectorNames from "../../components/selectornames";
import { action } from "@storybook/addon-actions";

export default {
    title: "SelectorNames",
    component: SelectorNames,
    decorators: [withKnobs],
};

export const EmptySelectorNames: React.VFC<{}> = () => {
    const languages: Array<string> = ["en-GB", "en-US", "es-ES", "ca-ES"];
    const language: string = select("locale", languages, languages[0]);
    const search: boolean = boolean("search", true);
    const showActive: boolean = boolean("show active", false);
    const disabled: boolean = boolean("disabled", false);
    const label: string = text("label", "Title");
    const items = [];

    return (
        <SelectorNames
            items={items}
            search={search}
            showActive={showActive}
            disabled={disabled}
            locale={language}
            label={label}
            onChangeItems={action("changed items")}
        />
    );
};

export const SelectorNamesWithFewValues: React.VFC<{}> = () => {
    const languages: Array<string> = ["en-GB", "en-US", "es-ES", "ca-ES"];
    const language: string = select("locale", languages, languages[0]);
    const search: boolean = boolean("search", true);
    const showActive: boolean = boolean("show active", false);
    const disabled: boolean = boolean("disabled", false);
    const label: string = text("label", "Title");
    const size = select("size", ["xl", "l", "m", "s"], "xl");
    const items = [
        { id: 0, description: "Field 1", selected: false },
        {
            id: 1,
            description:
                "Field 2 is a very clear example of what happens if the text rebases the content of the dropdown",
            selected: false,
        },
    ];

    return (
        <SelectorNames
            size={size}
            items={items}
            search={search}
            showActive={showActive}
            disabled={disabled}
            locale={language}
            label={label}
            onChangeItems={action("changed items")}
        />
    );
};

export const SelectorNamesWithMoreValues: React.VFC<{}> = () => {
    const languages: Array<string> = ["en-GB", "en-US", "es-ES", "ca-ES"];
    const language: string = select("locale", languages, languages[0]);
    const search: boolean = boolean("search", true);
    const showActive: boolean = boolean("show active", false);
    const disabled: boolean = boolean("disabled", false);
    const label: string = text("label", "Title");
    const size = select("size", ["xl", "l", "m", "s"], "xl");
    const items = [
        { id: 0, description: "Field 1", selected: false },
        {
            id: 1,
            description: "Field 2",
            selected: false,
        },
        {
            id: 2,
            description: "Field 3",
            selected: false,
        },
        {
            id: 3,
            description: "Field 4",
            selected: false,
        },
        {
            id: 4,
            description: "Field 5",
            selected: false,
        },
    ];

    return (
        <SelectorNames
            size={size}
            items={items}
            search={search}
            showActive={showActive}
            disabled={disabled}
            locale={language}
            label={label}
            onChangeItems={action("changed items")}
        />
    );
};

export const SelectorNamesWithInitialItemSelected: React.VFC<{}> = () => {
    const languages: Array<string> = ["en-GB", "en-US", "es-ES", "ca-ES"];
    const language: string = select("locale", languages, languages[0]);
    const search: boolean = boolean("search", true);
    const showActive: boolean = boolean("show active", false);
    const disabled: boolean = boolean("disabled", false);
    const label: string = text("label", "Title");
    const size = select("size", ["xl", "l", "m", "s"], "xl");
    const items = [
        { id: 0, description: "Field 1", selected: false },
        {
            id: 1,
            description:
                "Field 2 is a very clear example of what happens if the text rebases the content of the dropdown",
            selected: true,
        },
    ];

    return (
        <SelectorNames
            size={size}
            items={items}
            search={search}
            showActive={showActive}
            disabled={disabled}
            locale={language}
            label={label}
            onChangeItems={action("changed items")}
        />
    );
};

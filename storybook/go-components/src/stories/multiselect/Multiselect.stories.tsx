import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, select, withKnobs } from "@storybook/addon-knobs";
import {
    MultiSelect,
    MultiselectCheckboxType,
} from "../../components/multiselect";
import { mockedItems, mockedHierarchy } from "./multiselectvalues";

export default {
    title: "Multiselect",
    component: MultiSelect,
    decorators: [withKnobs],
};

export const MultiSelectEmpty = () => {
    const languages: Array<string> = ["en-GB", "en-US", "es-ES", "ca-ES"];
    const language: string = select("locale", languages, languages[0]);
    const selected: boolean = boolean("selected", true);
    const search: boolean = boolean("search", true);
    const size = select("size", ["l", "m"], "l");
    const alternative: boolean = boolean("alternative", false);

    return (
        <MultiSelect
            size={size}
            items={[]}
            selected={selected}
            search={search}
            locale={language}
            label={"test"}
            disabled={false}
            onChangeItems={action("updated items")}
            alternative={alternative}
        />
    );
};

export const MultiSelectWithItems = () => {
    const languages: Array<string> = ["en-GB", "en-US", "es-ES", "ca-ES"];
    const language: string = select("locale", languages, languages[0]);
    const selected: boolean = boolean("selected", true);
    const disabled: boolean = boolean("disabled", false);
    const search: boolean = boolean("search", true);
    const size = select("size", ["l", "m"], "l");
    const alternative: boolean = boolean("alternative", false);

    return (
        <MultiSelect
            size={size}
            items={mockedItems}
            selected={selected}
            search={search}
            locale={language}
            label={"test"}
            disabled={disabled}
            onChangeItems={action("updated items")}
            alternative={alternative}
        />
    );
};

export const MultiSelectWithCheckboxTree = () => {
    const languages: Array<string> = ["en-GB", "en-US", "es-ES", "ca-ES"];
    const language: string = select("locale", languages, languages[0]);
    const selected: boolean = boolean("selected", true);
    const disabled: boolean = boolean("disabled", false);
    const search: boolean = boolean("search", true);
    const size = select("size", ["l", "m"], "l");
    const alternative: boolean = boolean("alternative", false);

    return (
        <MultiSelect
            size={size}
            locale={language}
            selected={selected}
            disabled={disabled}
            label={"test"}
            search={search}
            onChangeNodes={(checked, expanded) => {
                console.log("checked", checked);
                console.log("expanded", expanded);
                action("updated items");
            }}
            type={MultiselectCheckboxType.CHECKTREE}
            nodes={[mockedHierarchy]}
            nodesExpandedByDefault={["22-hierarchy"]}
            alternative={alternative}
        />
    );
};

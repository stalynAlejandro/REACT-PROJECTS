import React from "react";
import { withKnobs, text, select, boolean } from "@storybook/addon-knobs";
import Selector from "../../components/selector";
import { action } from "@storybook/addon-actions";
import { generateOptions } from "./options";
import { OptionType } from "../../components/alarm-bar/components/selector/types";

export default {
    title: "Selector",
    component: Selector,
    decorators: [withKnobs],
};

export const DefaultSelector: React.VFC<{}> = () => {
    const languages: Array<string> = ["en-GB", "en-US", "es-ES", "ca-ES"];
    const language: string = select("locale", languages, languages[0]);
    const value: string = text("value", "-1");
    const label: string = text("label", "selector");
    const languageOptions: Array<OptionType> = generateOptions(language);
    const disabled: boolean = boolean("disabled", false);
    const showSearch: boolean = boolean("Show Search", false);

    return (
        <Selector
            options={languageOptions}
            label={label}
            value={value}
            onChange={action("update value")}
            showSearch={showSearch}
            disabled={disabled}
        />
    );
};

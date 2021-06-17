import React from "react";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import SearchComponent from "../../components/searchcomponent";

export default {
    title: "SearchComponent",
    component: SearchComponent,
    decorators: [withKnobs],
};

export const DefaultSearchComponent = () => {
    const languages: Array<string> = ["en-GB", "en-US", "es-ES", "ca-ES"];
    const sizes: string[] = ["l", "m", "s"];
    const language: string = select("locale", languages, languages[0]);
    const size: "l" | "m" | "s" = select("size", sizes, sizes[1]) as
        | "l"
        | "m"
        | "s";
    const alternative: boolean = boolean("alternative", false);
    const defaultText: string = text("default", "");

    return (
        <SearchComponent
            locale={language}
            size={size}
            alternative={alternative}
            defaultText={defaultText}
            onChangeText={action("text changed")}
        />
    );
};

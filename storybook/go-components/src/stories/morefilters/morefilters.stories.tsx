import React from "react";
import { withKnobs, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import MoreFilters from "../../components/morefilters";

export default {
    title: "MoreFilters",
    component: MoreFilters,
    decorators: [withKnobs],
};

export const DefaulMoreFilters: React.VFC<{}> = () => {
    const languages: Array<string> = ["en-GB", "en-US", "es-ES", "ca-ES"];
    const language: string = select("locale", languages, languages[0]);

    return (
        <MoreFilters
            locale={language}
            onShowChildren={action("show children")}
        />
    );
};

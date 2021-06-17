import React from "react";
import { withKnobs, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import MapError from "../../components/maperror";

export default {
    title: "MapError",
    component: MapError,
    decorators: [withKnobs],
};

export const DefaulMapError: React.VFC<{}> = () => {
    const languages: Array<string> = ["en-GB", "en-US", "es-ES", "ca-ES"];
    const language: string = select("locale", languages, languages[0]);

    return <MapError locale={language} onClose={action("close map error")} />;
};

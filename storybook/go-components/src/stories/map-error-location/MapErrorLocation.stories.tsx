import React from "react";
import { withKnobs, select } from "@storybook/addon-knobs";
import MapErrorLocation from "../../components/map-error-location";

export default {
    title: "MapErrorLocation",
    component: MapErrorLocation,
    decorators: [withKnobs],
};

export const MapErrorLocationDefault: React.VFC<{}> = () => {
    const languages: Array<string> = ["en-GB", "en-US", "es-ES", "ca-ES"];
    const language: any = select("locale", languages, languages[0]);
    return <MapErrorLocation locale={language} />;
};

import React from "react";
import { withKnobs, select } from "@storybook/addon-knobs";
import ProgressLegend from "../../components/progress-legend";
import { rangeColors } from "./mocked-data";

export default {
    title: "ProgressLegend",
    component: ProgressLegend,
    decorators: [withKnobs],
};

export const DefaultProgressLegend = () => {
    const languages: Array<string> = ["en-GB", "en-US", "es-ES", "ca-ES"];
    const language: string = select("locale", languages, languages[0]);

    return <ProgressLegend locale={language} rangeColors={rangeColors} />;
};

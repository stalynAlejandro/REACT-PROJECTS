import React from "react";
import { number, text, withKnobs } from "@storybook/addon-knobs";
import SemicircularProgressbar from "../../components/semicircular-progressbar";

export default {
    title: "SemicircularProgressbar",
    component: SemicircularProgressbar,
    decorators: [withKnobs],
};

export const SemicircularProgressbarDefault: React.VFC<{}> = () => {
    return (
        <SemicircularProgressbar
            value={text("value", "2563")}
            percentValue={number("percentValue", 20)}
        />
    );
};

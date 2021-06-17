import React from "react";
import { number, text, withKnobs } from "@storybook/addon-knobs";
import CircularProgrssBar from "../../components/circular-progressbar";

export default {
    title: "CircularProgrssBar",
    component: CircularProgrssBar,
    decorators: [withKnobs],
};

export const CircularProgrssBarNumber: React.VFC<{}> = () => {
    return (
        <CircularProgrssBar
            value={number("value", 2563)}
            percentValue={number("percentValue", 20)}
        />
    );
};

export const CircularProgrssBarString: React.VFC<{}> = () => {
    return (
        <CircularProgrssBar
            value={text("value", "2563")}
            percentValue={number("percentValue", 20)}
        />
    );
};

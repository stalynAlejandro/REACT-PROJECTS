import React from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import Legend from "../../components/legend";

export default {
    title: "Legend",
    component: Legend,
    decorators: [withKnobs],
};

export const LegendDefault: React.VFC<{}> = () => {
    const title: string = text("title", "Legend");
    const header: boolean = boolean("header", true);
    const items = [
        { id: 1, text: "< 50%", color: "#E37272" },
        { id: 2, text: "50% - 90%", color: "#E9C417" },
        { id: 3, text: "> 90%", color: "#92C089" },
    ];

    return <Legend header={header} title={title} items={items} />;
};

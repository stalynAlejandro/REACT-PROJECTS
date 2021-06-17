import React from "react";
import { withKnobs, number, text, select, color } from "@storybook/addon-knobs";
import KpiIndicator from "../../components/kpiIndicator";
import MugHot from "../../assets/icons/mug-hot";

export default {
    title: "KpiIndicator",
    component: KpiIndicator,
    decorators: [withKnobs],
};

export const KpiIndicatorDefault: React.VFC<{}> = () => {
    return (
        <KpiIndicator
            value={number("value", 23)}
            label={text("label", "label text")}
            size={select("size", ["l", "m", "s"], "m")}
            weight={select("weight", ["normal", "bold"], "normal")}
            display={select("display", ["column", "row", "row-reverse"], "row")}
            type={select("type", ["primary", "default"], "default")}
            groupPosition={select(
                "groupPosition",
                ["icon-row", "icon-column", "group-column"],
                "icon-column"
            )}
        />
    );
};

export const KpiIndicatorWithIcon: React.VFC<{}> = () => {
    return (
        <KpiIndicator
            value={number("value", 23)}
            label={text("label", "label text")}
            icon={<MugHot />}
            size={select("size", ["l", "m", "s"], "m")}
            weight={select("weight", ["normal", "bold"], "normal")}
            display={select("display", ["column", "row", "row-reverse"], "row")}
            type={select("type", ["primary", "default"], "default")}
            iconColor={color("iconColor", "")}
            groupPosition={select(
                "groupPosition",
                ["icon-row", "icon-column", "group-column"],
                "icon-column"
            )}
        />
    );
};

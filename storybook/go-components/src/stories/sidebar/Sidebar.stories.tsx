import React from "react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import SideBar from "../../components/sidebar";

export default {
    title: "SideBar",
    component: SideBar,
    decorators: [withKnobs],
};

export const DefaultSideBar: React.VFC<{}> = () => {
    const value: boolean = boolean("visible", true);
    const floating: boolean = boolean("floating", true);
    const expanded: boolean = boolean("expanded", false);
    return <SideBar visible={value} floating={floating} expanded={expanded} />;
};

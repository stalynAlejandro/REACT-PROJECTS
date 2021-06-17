import React from "react";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Switcher from "../../components/switcher";

export default {
    title: "Switcher",
    component: Switcher,
    decorators: [withKnobs],
};

export const DefaultSwitcher: React.VFC<{}> = () => {
    const htmlFor: string = text("title", "theme-switcher");
    const checked: boolean = boolean("checked", false);
    return (
        <Switcher
            switcherName={htmlFor}
            checked={checked}
            onChange={action("checked")}
        />
    );
};

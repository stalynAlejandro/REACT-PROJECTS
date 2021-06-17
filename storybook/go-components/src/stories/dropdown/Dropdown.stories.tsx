import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import DropDown from "../../components/dropdown";
import BellIcon from "./icons/bellicon";

export default {
    title: "DropDown",
    component: DropDown,
    decorators: [withKnobs],
};

export const DefaultDropDown: React.VFC<{}> = () => {
    const title: string = text("title: ", "Críticas N1");
    const description: string = text("description: ", "(83 Alarmas)");

    return (
        <DropDown title={title} icon={<BellIcon />} description={description}>
            <DropDown
                title={"Comunicación"}
                icon={<BellIcon />}
                description={"(24 Alarmas)"}
            />
        </DropDown>
    );
};

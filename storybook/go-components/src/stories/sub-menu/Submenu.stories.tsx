import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import SubMenu from "../../components/submenu";
import SubPath from "../../components/subpath";

export default {
    title: "SubMenu",
    component: [SubMenu, SubPath],
    decorators: [withKnobs],
};

export const DefaultSubMenu = () => {
    return <SubMenu lefttComponent={null} rightComponent={null} />;
};

export const SubMenuWitTexts = () => {
    return (
        <SubMenu
            lefttComponent={<SubPath title={"Componente A"} />}
            rightComponent={<SubPath title={"Componente B"} />}
        />
    );
};

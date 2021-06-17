import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import Header from "../../components/header";
import Breadcrumb from "../../components/breadcrumb";
import UserPopover from "./popovers/user-popover";
import AppPopover from "./popovers/app-popover";
import GoAiguaLogoLight from "./icons/logo-icon-drinkingwater-light";
import GoAiguaLogoDark from "./icons/logo-icon-drinkingwater-dark";

export default {
    title: "Header",
    component: Header,
    subcomponents: { Breadcrumb, UserPopover, AppPopover },
    decorators: [withKnobs],
};

export const HeaderDefault: React.VFC<{}> = () => (
    <Header
        expanded={false}
        icons={[]}
        logo={null}
        PopoverAvatar={null}
        LinearIcon={null}
        Breadcumb={null}
        onChangeExpanded={action("expanded")}
    />
);

export const HeaderComplete: React.VFC<{}> = () => {
    const mode = boolean("light: ", true);
    return (
        <div>
            <Header
                expanded={false}
                icons={[]}
                logo={mode ? <GoAiguaLogoLight /> : <GoAiguaLogoDark />}
                PopoverAvatar={<UserPopover />}
                LinearIcon={<AppPopover />}
                Breadcumb={
                    <Breadcrumb breadcumbs={["Smartmetering", "Dashboard"]} />
                }
                onChangeExpanded={action("expanded")}
            />
            <div id="another-root" style={{ height: "100%" }}></div>
        </div>
    );
};

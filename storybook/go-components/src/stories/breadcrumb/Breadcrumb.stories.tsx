import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Breadcrumb from "../../components/breadcrumb";
import Header from "../../components/header";

export default {
    title: "Breadcrumb",
    component: [Breadcrumb, Header],
    decorators: [withKnobs],
};

export const DefaultBreadcrumb: React.VFC<{}> = () => {
    return (
        <Header
            expanded={false}
            icons={[]}
            logo={null}
            PopoverAvatar={null}
            LinearIcon={null}
            Breadcumb={<Breadcrumb breadcumbs={[]} />}
            onChangeExpanded={() => null}
        />
    );
};

export const SimpleBreadcrumb: React.VFC<{}> = () => {
    return (
        <Header
            expanded={false}
            icons={[]}
            logo={null}
            PopoverAvatar={null}
            LinearIcon={null}
            Breadcumb={<Breadcrumb breadcumbs={["Smartmetering"]} />}
            onChangeExpanded={() => null}
        />
    );
};

export const NoramlBreadcrumb: React.VFC<{}> = () => {
    return (
        <Header
            expanded={false}
            icons={[]}
            logo={null}
            PopoverAvatar={null}
            LinearIcon={null}
            Breadcumb={
                <Breadcrumb breadcumbs={["Smartmetering", "Dashboard"]} />
            }
            onChangeExpanded={() => null}
        />
    );
};

export const ComplexBreadcrumb: React.VFC<{}> = () => {
    return (
        <Header
            expanded={false}
            icons={[]}
            logo={null}
            PopoverAvatar={null}
            LinearIcon={null}
            Breadcumb={
                <Breadcrumb
                    breadcumbs={["My Operation", "Smartmetering", "Dashboard"]}
                />
            }
            onChangeExpanded={() => null}
        />
    );
};

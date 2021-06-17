import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import DefaultContainer from "../../components/defaultcontainer";

export default {
    title: "DefaultContainer",
    component: DefaultContainer,
    decorators: [withKnobs],
};

export const DefaultContainerDefault: React.VFC<{}> = () => {
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <DefaultContainer>
                <div></div>
            </DefaultContainer>
        </div>
    );
};

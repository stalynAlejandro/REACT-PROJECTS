import React from "react";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import TileContainer from "../../components/tilecontainer";

export default {
    title: "TileContainer",
    component: TileContainer,
    decorators: [withKnobs],
};

export const DefaultTileContainer: React.VFC<{}> = () => {
    const title: string = text("Title", "Alarms");
    const showTitle: boolean = boolean("show Title", true);
    const showButton: boolean = boolean("show Button", true);
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <TileContainer
                title={title}
                showTitle={showTitle}
                showIcon={showButton}
                onClickedIcon={action("clicked icon")}
            />
        </div>
    );
};

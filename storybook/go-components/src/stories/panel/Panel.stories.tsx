import React from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import Panel from "../../components/panel";

export default {
    title: "Panel",
    component: [Panel],
    decorators: [withKnobs],
};

export const DefaultPanel: React.VFC<{}> = () => {
    return (
        <div
            style={{
                display: "grid",
                width: "100vw",
                height: "100vh",
                gridTemplateColumns: "repeat(12, 1fr)",
                gridTemplateRows: "repeat(12, 1fr)",
            }}
        >
            <Panel
                Component={null}
                style={{ gridColumn: "1 / 8", gridRow: "1 / 5" }}
            />
        </div>
    );
};

export const PanelWithHeader: React.VFC<{}> = () => {
    const showHeader: boolean = boolean("show Header", true);
    const showIcon: boolean = boolean("show Icon", true);
    const titleHeader: string = text("title Header", "Monitorización");

    return (
        <div
            style={{
                display: "grid",
                width: "100vw",
                height: "100vh",
                gridTemplateColumns: "repeat(12, 1fr)",
                gridTemplateRows: "repeat(12, 1fr)",
            }}
        >
            <Panel
                showHeader={showHeader}
                titleHeader={titleHeader}
                Component={null}
                showIcon={showIcon}
                style={{ gridColumn: "1 / 8", gridRow: "1 / 5" }}
            />
        </div>
    );
};

import React from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import Widget from "../../components/widget";
import ExpandIcon from "../../components/expand-icon";
import EllipsisIcon from "./icons/ellipsis-icon";
import "./styles/widget-stories.scss";

export default {
    title: "Widget",
    component: Widget,
    subcomponents: { ExpandIcon, EllipsisIcon },
    decorators: [withKnobs],
};

export const SimpleWidget: React.VFC<{}> = () => {
    const title: string = text("Title", "Gráfica 1");
    return (
        <div style={{ display: "grid", width: "600px", height: "300px" }}>
            <Widget
                title={title}
                expanded={false}
                showExpanded={false}
                hasOptions={false}
                ellipsisMenu={null}
                expandIcon={null}
                style={{ gridRow: "1 / 5", gridColumn: "1 / 13" }}
            />
        </div>
    );
};

export const InteractiveWidget: React.VFC<{}> = () => {
    const title: string = text("Title", "Gráfica 1");
    const expanded: boolean = boolean("expanded", false);
    const showExpanded: boolean = boolean("showExpanded", true);
    const hasOptions: boolean = boolean("hasOptions", false);
    return (
        <div style={{ display: "grid", width: "600px", height: "300px" }}>
            <Widget
                title={title}
                expanded={expanded}
                showExpanded={showExpanded}
                hasOptions={hasOptions}
                ellipsisMenu={
                    <div className="ellipsis-icon">
                        <EllipsisIcon />
                    </div>
                }
                expandIcon={
                    <ExpandIcon expanded={false} onExpanded={() => null} />
                }
                style={{ gridRow: "1 / 5", gridColumn: "1 / 13" }}
            />
        </div>
    );
};

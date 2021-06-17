import React from "react";
import { text, withKnobs } from "@storybook/addon-knobs";
import Tooltip from "../../components/tooltip";

export default {
    title: "Tooltip",
    component: Tooltip,
    decorators: [withKnobs],
};

export const DefaultTooltip: React.VFC<{}> = () => {
    const style: React.CSSProperties = {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        marginTop: 100,
    };
    return (
        <div style={style}>
            <Tooltip content={text("content", "My tooltip text")}>
                <div>My text</div>
            </Tooltip>
        </div>
    );
};

export const DefaultTooltipInner: React.VFC<{}> = () => {
    const style: React.CSSProperties = {
        display: "flex",
        justifyContent: "center",
        width: "200px",
        marginTop: 100,
        padding: "20px",
        border: "1px solid #000",
    };
    return (
        <div style={style}>
            This is an overflow: hidden container but
            <Tooltip content={text("content", "My tooltip text")}>
                <div>test</div>
            </Tooltip>
        </div>
    );
};

import React from "react";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import TileMap from "../../components/tile-map";

export default {
    title: "TileMap",
    component: TileMap,
    decorators: [withKnobs],
};

export const DefaultTileMap: React.VFC<{}> = () => {
    const loading: boolean = boolean("loading", false);
    const loadingTitle: string = text("loading title", "Loading...");
    const style: React.CSSProperties = { gridRow: "", gridColumn: "" };
    return (
        <TileMap loading={loading} loadingTitle={loadingTitle} style={style} />
    );
};

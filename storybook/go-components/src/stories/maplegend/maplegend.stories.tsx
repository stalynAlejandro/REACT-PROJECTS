import React from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import MapLegend from "../../components/maplegend";

export default {
    title: "MapLegend",
    component: MapLegend,
    decorators: [withKnobs],
};

export const DefaulMapLegend: React.VFC<{}> = () => {
    const title: string = text("title", "Legend");
    const header: boolean = boolean("header", true);
    const items = [
        { id: 1, text: "< 50%", color: "#E37272" },
        { id: 2, text: "50% - 90%", color: "#E9C417" },
        { id: 3, text: "> 90%", color: "#92C089" },
    ];

    return <MapLegend header={header} title={title} items={items} />;
};

export const MonitoringMapLegend: React.VFC<{}> = () => {
    const title: string = text("title", "");
    const header: boolean = boolean("header", false);
    const ids: boolean = boolean("ids", false);
    const items = [
        { id: 1, text: "Sin comunicación", color: "#E37272" },
        { id: 2, text: "Con comunicación", color: "#92C089" },
    ];

    return <MapLegend ids={ids} header={header} title={title} items={items} />;
};

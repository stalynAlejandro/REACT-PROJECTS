import React from "react";
import { MapLegendPropsType } from "./types";
import Legend from "../legend";
import "./styles/legend.scss";

const MapLegend = ({
    title = "",
    items = [],
    header = true,
    ids = true,
}: MapLegendPropsType) => {
    return (
        <div className="map-legend">
            <Legend title={title} items={items} header={header} ids={ids} />
        </div>
    );
};

export default MapLegend;

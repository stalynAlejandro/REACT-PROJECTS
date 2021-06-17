import React from "react";
import { ContainerType } from "./types";

const Container = ({
    children = null,
    gridRow = "1 / 13",
    gridColumn = "1 / 13",
}: ContainerType) => {
    return (
        <div
            className="container-menu"
            style={{
                gridRow: gridRow,
                gridColumn: gridColumn,
            }}
        >
            {children}
        </div>
    );
};

export default Container;

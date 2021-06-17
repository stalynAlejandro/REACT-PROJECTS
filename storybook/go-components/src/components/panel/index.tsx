import React from "react";
import { PanelPropsType } from "./types";
import EllipsisIcon from "./icons/ellipsisicon";
import "./styles/simple-kpi.scss";

const Panel = ({
    showHeader = false,
    titleHeader,
    showIcon = false,
    style,
    Component,
}: PanelPropsType) => {
    return (
        <div className="simple-kpi simple-kpi-no-select" style={style}>
            {showHeader && (
                <React.Fragment>
                    <div className="simple-kpi-header">
                        <div className="header-title">{titleHeader}</div>
                        {showIcon && (
                            <div className="header-icons">
                                {<EllipsisIcon />}
                            </div>
                        )}
                    </div>
                    <div className="simple-kpi-container-with-header">
                        {Component}
                    </div>
                </React.Fragment>
            )}
            {!showHeader && (
                <div className="simple-kpi-container">{Component}</div>
            )}
        </div>
    );
};

export default Panel;

import React from "react";
import SettingsIcon from "./icons/settings";
import { TileContainerType } from "./types";
import "./styles/tilecontainer.scss";

const TileContainer = ({
    title = "",
    showIcon = false,
    children = null,
    onClickedIcon,
}: TileContainerType) => {
    return (
        <div className="tile-container">
            <div className="tile-container-header">
                <div className="tile-container-header-title tile-no-select">
                    {title}
                </div>
                <div
                    className="tile-container-header-icon"
                    onClick={onClickedIcon}
                >
                    {showIcon && <SettingsIcon />}
                </div>
            </div>
            <div className="tile-container-content">{children}</div>
        </div>
    );
};

export default TileContainer;

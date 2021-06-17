import React from "react";
import { SideBarType } from "./types";
import "./styles/sidebar.scss";

const SideBar = ({
    visible = false,
    floating = false,
    expanded = false,
    children = null,
}: SideBarType) => {
    return visible ? (
        <React.Fragment>
            {floating ? (
                <div
                    className={`sidebar-floating ${
                        expanded ? "sidebar-floating--expanded" : ""
                    }`}
                >
                    <div className="sidebar-content">{children}</div>
                </div>
            ) : (
                <div
                    className={`sidebar-normal ${
                        expanded ? "sidebar-normal--expanded" : ""
                    }`}
                >
                    <div className="sidebar-content">{children}</div>
                </div>
            )}
        </React.Fragment>
    ) : null;
};

export default SideBar;

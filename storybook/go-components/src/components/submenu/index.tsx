import React from "react";
import { SubMenuType } from "./types";
import "./styles/submenu.scss";

const SubMenu = ({ lefttComponent, rightComponent }: SubMenuType) => {
    return (
        <div className="sub-menu">
            <div className="sub-menu-left">{lefttComponent}</div>
            <div className="sub-menu-right">{rightComponent}</div>
        </div>
    );
};

export default SubMenu;

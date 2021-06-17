import React, { useState } from "react";
import BarsIcon from "./icons/bars-icon";
import { HeaderType, IconType } from "./types";
import "./styles/header.scss";

const Header = ({
    expanded,
    title = "",
    icons,
    logo,
    PopoverAvatar,
    LinearIcon,
    Breadcumb,
    onChangeExpanded,
}: HeaderType) => {
    const [status, setStatus] = useState<boolean>(expanded);
    const expandSideBar = () => {
        const newStatus = !status;
        setStatus(newStatus);
        onChangeExpanded(newStatus);
    };

    return (
        <div className="header-component header-component-no-select">
            <div className="header-component-left">
                <div className="header-component-bars">
                    <BarsIcon onClicked={expandSideBar} />
                </div>
                <div className="header-component-breadcumbs">
                    <ol className="header-component-breadcrumb">{Breadcumb}</ol>
                </div>
            </div>
            <div className="header-component-logo">{logo}</div>
            <div className="header-component-logo-title">
                {title.toUpperCase()}
            </div>
            <div className="header-component-right">
                <div className="header-component-buttons">
                    {Array.isArray(icons) &&
                        icons.map((icon: IconType) => {
                            const IconPopover = icon.Component;
                            return icon?.visible
                                ? IconPopover && IconPopover
                                : null;
                        })}
                </div>
                <div className="header-component-user">{PopoverAvatar}</div>
                <div className="header-component-lienaricon">{LinearIcon}</div>
            </div>
        </div>
    );
};

export default Header;

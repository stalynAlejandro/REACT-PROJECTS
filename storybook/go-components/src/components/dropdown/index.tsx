import React, { useState } from "react";
import { DropDownType } from "./types";
import AngleUpIcon from "./icons/angleup";
import AngleDownIcon from "./icons/angledown";
import "./styles/dropdown.scss";

const DropDown = ({
    title = "",
    icon = null,
    description = "",
    children,
}: DropDownType) => {
    const [active, setActive] = useState<boolean>(false);

    const updateStatus = () => {
        const status = !active;
        setActive(status);
    };

    return (
        <React.Fragment>
            <div className="drop-down-component" onClick={updateStatus}>
                <div className="drop-down-content drop-down-no-select">
                    <div className="drop-down-icon">
                        {active ? <AngleUpIcon /> : <AngleDownIcon />}
                    </div>
                    <div className="drop-down-title">{title}</div>
                    <div className="drop-down-info">
                        <div className="drop-down-info-icon">{icon}</div>
                        <div className="drop-down-info-description">
                            {description}
                        </div>
                    </div>
                </div>
            </div>
            {active && <div className="drop-down-container">{children}</div>}
        </React.Fragment>
    );
};

export default DropDown;

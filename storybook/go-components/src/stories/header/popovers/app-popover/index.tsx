import React from "react";
import Popover from "../../../../components/popover";
import LinearIcon from "../../../../components/linear-icon";
import PortalIcon from "../../icons/portal-icon";
import "./style/apppopover.scss";

const AppPopover = () => {
    return (
        <Popover
            iconComponent={<LinearIcon />}
            place={"bottom-left"}
            triggerClass="app-popover"
        >
            <div className="app-popover-body">
                <div className="app-popover-content">
                    <PortalIcon />
                    <span className="app-popover-title">Portal</span>
                </div>
            </div>
        </Popover>
    );
};

export default AppPopover;

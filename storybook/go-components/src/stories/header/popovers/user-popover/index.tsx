import React from "react";
import Popover from "../../../../components/popover";
import User from "../../user-component";
import SignOut from "../../icons/signout-icon";
import { user } from "./constants";
import "./style/userpopover.scss";

const UserPopover = () => {
    return (
        <Popover
            iconComponent={<User user={user} />}
            place={"bottom"}
            triggerClass="user-popover"
        >
            <div className="user-popover-body">
                <span className="icon-wrapper">
                    <div className="icon-button">
                        <SignOut />
                    </div>
                    <span className="signout-title">{"Log out"}</span>
                </span>
            </div>
        </Popover>
    );
};

export default UserPopover;

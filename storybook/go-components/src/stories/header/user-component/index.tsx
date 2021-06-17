import React from "react";
import { UserIconType } from "./types";
import avatarUnknown from "../icons/avatar-unknow.jpg";
import "./style/usericon.scss";

const UserIcon = ({ user }: UserIconType) => {
    return (
        <div className="user-icon">
            <img
                src={user?.photo ? user?.photo : avatarUnknown}
                alt={"avatar"}
                className="user-avatar-photo"
            />
            <span className="user-avatar-name">{user?.name}</span>
        </div>
    );
};

export default UserIcon;

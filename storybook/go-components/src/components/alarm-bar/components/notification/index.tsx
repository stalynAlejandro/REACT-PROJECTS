import React from "react";
import ExclamationCircleIcon from "./icons/exclamationcircle-icon";
import EyeOpenIcon from "./icons/eyeopen-icon";
import EyeClosedIcon from "./icons/eyeclosed-icon";
import { NotificationType } from "./types";
import "./styles/notification.scss";

const Notification = ({
    notification,
    showRead,
    onCloseEye,
}: NotificationType) => {
    const alarm: boolean = notification.alarm;
    const read: boolean = notification.read;
    const Icon = notification?.icon ? notification.icon : null;
    return (
        <div className="notification-item">
            <div className="notification-header">
                <div className="notification-alarm">
                    {notification.alarm && <ExclamationCircleIcon />}
                </div>
                <div className="notification-title">
                    {notification.title.charAt(0).toUpperCase() +
                        notification.title.slice(1).toLowerCase()}
                </div>
                {!notification.read && (
                    <div className="notification-read">
                        <EyeOpenIcon
                            onChangeEye={() =>
                                onCloseEye(notification.id, true)
                            }
                        />
                    </div>
                )}
                {notification.read && (
                    <div className="notification-read">
                        <EyeClosedIcon
                            onChangeEye={() =>
                                onCloseEye(notification.id, false)
                            }
                        />
                    </div>
                )}
            </div>
            <div className="notification-body">
                <div className="notification-content">
                    <div className="notification-content-icon">
                        <div
                            className={`icon-content ${
                                read
                                    ? "--readed"
                                    : alarm
                                    ? "--alarm"
                                    : "--normal"
                            }`}
                        >
                            {<Icon />}
                        </div>
                    </div>
                    <div className="notification-content-description">
                        <span
                            className={`${
                                showRead ? "--disabled" : "--enabled"
                            }`}
                        >
                            {notification.description}
                        </span>
                    </div>
                </div>
            </div>
            <div className="notification-date">
                <span>{notification.date}</span>
            </div>
        </div>
    );
};

export default Notification;

import React from "react";
import { ToastItemType } from "../../types";
import CloseIcon from "../../icons/close-icon";
import { NormalNotificationType } from "./types";

const NormalNotification = ({
    size,
    position,
    list,
    loadIcon,
    deleteToast,
}: NormalNotificationType) => {
    return (
        <React.Fragment>
            <div
                className={`notification-container toast-no-select ${position}`}
            >
                {list.map((toast: ToastItemType, index: number) => {
                    return (
                        <div
                            key={index}
                            className={`notification toast ${position} ${size} toast-${toast.type}`}
                        >
                            <div className="notification-body">
                                <div className="notification-image">
                                    {loadIcon(toast.type)}
                                </div>
                                <div className="notification-texts">
                                    <div className="notification-title">
                                        {toast.title}
                                    </div>
                                    <div className="notification-message">
                                        {toast.description}
                                    </div>
                                </div>
                                <div
                                    className="notification-button"
                                    onClick={() => deleteToast(toast.id)}
                                >
                                    <CloseIcon />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </React.Fragment>
    );
};

export default NormalNotification;

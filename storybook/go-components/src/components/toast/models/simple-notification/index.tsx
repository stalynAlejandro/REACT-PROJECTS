import React from "react";
import { ToastItemType } from "../../types";
import CloseIcon from "../../icons/close-icon";
import SuccessIconInsp from "../../icons/success-icon-insp";
import ErrorIconInsp from "../../icons/error-icon-insp";
import { TypeNotifications } from "../../constants";
import { SimpleNotificationType } from "./types";

const SimpleNotification = ({
    size,
    position,
    list,
    deleteToast,
}: SimpleNotificationType) => {
    return (
        <React.Fragment>
            <div
                className={`notification-container toast-no-select ${position}`}
            >
                {list.map((toast: ToastItemType, index: number) => {
                    return (
                        <div
                            key={index}
                            className={`notification toast ${position} ${size} toast-goaigua`}
                        >
                            <div className="notification-body">
                                <div className="notification-simpe-image">
                                    {toast.type ===
                                        TypeNotifications.SUCCESS && (
                                        <div className="success">
                                            <SuccessIconInsp />
                                        </div>
                                    )}
                                    {toast.type === TypeNotifications.ERROR && (
                                        <div className="danger">
                                            <ErrorIconInsp />
                                        </div>
                                    )}
                                </div>
                                <div className="notification-texts">
                                    <span className="notification-message">
                                        {toast.description}
                                    </span>
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

export default SimpleNotification;

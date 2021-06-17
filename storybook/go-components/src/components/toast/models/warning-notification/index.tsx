import React from "react";
import WarningIcon from "../../icons/warning-icon";
import CloseIcon from "../../icons/close-icon";
import { WarningNotificationType } from "./types";
import { getBodyClass } from "./functions";
import { loadMessages } from "./languages";
import { ToastItemType } from "../../types";

const WarningNotification = ({
    locale = "en-GB",
    position,
    list,
    onClose,
    deleteToast,
}: WarningNotificationType) => {
    return (
        <React.Fragment>
            <div
                className={`notification-container toast-no-select ${position}`}
            >
                {list.map((toast: ToastItemType, index: number) => {
                    return (
                        <div
                            key={index}
                            className={`alert-message toast-alert ${position} toast-goaigua-warning`}
                        >
                            <div className="alert-container">
                                <div className="alert-header">
                                    <div className="title">
                                        {loadMessages(locale).HEADER}
                                    </div>
                                    <div
                                        className="icon"
                                        onClick={() => deleteToast(toast.id)}
                                    >
                                        <CloseIcon />
                                    </div>
                                </div>
                                <div className={`${getBodyClass(locale)}`}>
                                    <div className="container">
                                        <div className="icon">
                                            <WarningIcon />
                                        </div>
                                        <div className="title">
                                            {loadMessages(locale).BODY}
                                        </div>
                                    </div>
                                </div>
                                <div className="alert-footer">
                                    <div className="buttons">
                                        <div
                                            className="button-leave"
                                            onClick={() => onClose(toast.id)}
                                        >
                                            {loadMessages(locale).LEAVE_BUTTON}
                                        </div>
                                        <div
                                            className="button-accept"
                                            onClick={() =>
                                                deleteToast(toast.id)
                                            }
                                        >
                                            {loadMessages(locale).STAY_BUTTON}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </React.Fragment>
    );
};

export default WarningNotification;

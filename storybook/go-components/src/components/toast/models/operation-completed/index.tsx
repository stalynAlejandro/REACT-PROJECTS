import React from "react";
import CloseIcon from "../../icons/close-icon";
import SuccessIconInsp from "../../icons/success-icon-insp";
import { ToastItemType } from "../../types";
import { CompletedNotificationType } from "./types";
import { loadMessages } from "./languages";

const CompletedNotification = ({
    locale = "en-GB",
    size,
    position,
    list,
    onResult,
    deleteToast,
}: CompletedNotificationType) => {
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
                                <div className="notification-completed">
                                    <div className="notification-top">
                                        <div className="notification-top-icon">
                                            <SuccessIconInsp />
                                        </div>
                                        <div className="notification-top-title">
                                            <span>
                                                {loadMessages(locale).COMPLETED}
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        className="notification-result"
                                        onClick={onResult}
                                    >
                                        <div className="result-border">
                                            <span>
                                                {loadMessages(locale).REDIRECT}
                                            </span>
                                            <div className="underline"></div>
                                        </div>
                                        <div className="arrows">{">>"}</div>
                                    </div>
                                    <div
                                        className="notification-button-completed"
                                        onClick={() => deleteToast(toast.id)}
                                    >
                                        <CloseIcon />
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

export default CompletedNotification;

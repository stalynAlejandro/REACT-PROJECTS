import React from "react";
import Loader from "./components/loader";
import ProgressBar from "./components/progress";
import { ToastItemType } from "../../types";
import CloseIcon from "../../icons/close-icon";
import { LoaderNotificationType } from "./types";

const LoaderNotification = ({
    title,
    percentage,
    size,
    position,
    list,
    deleteToast,
}: LoaderNotificationType) => {
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
                                <div className="notification-loader">
                                    <div className="notification-top">
                                        <Loader />

                                        <div className="notification-loader-title">
                                            <span>{title}</span>
                                        </div>
                                    </div>
                                    <div className="notification-middle">
                                        <div className="notification-progress-bar">
                                            <ProgressBar
                                                percentage={percentage}
                                            />
                                        </div>
                                        <div className="notification-percentage">
                                            <span>{`${percentage}%`}</span>
                                        </div>
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

export default LoaderNotification;

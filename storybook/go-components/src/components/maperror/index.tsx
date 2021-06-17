import React from "react";
import { MapErrorType } from "./types";
import CloseIcon from "./icons/close-icon";
import ExclamationCircleIcon from "./icons/exclamation-circle-icon";
import { loadMessages } from "./languages";
import "./styles/maperror.scss";

const MapError = ({ locale = "en-GB", onClose }: MapErrorType) => {
    return (
        <div id="map-error" className="map-error map-error-no-select">
            <div className="map-error-container">
                <div className="map-error-header">
                    <div className="map-error-header-title">{"Error"}</div>
                    <div className="map-error-icon" onClick={onClose}>
                        <CloseIcon />
                    </div>
                </div>
                <div className="map-error-body">
                    <div className="map-error-body-icon">
                        <ExclamationCircleIcon />
                    </div>
                    <div className="map-error-body-message">
                        {loadMessages(locale).MESSAGE}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MapError;

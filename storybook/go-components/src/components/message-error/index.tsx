import React from "react";
import ExclamationCircle from "./icons";
import { MessageErrorType } from "./types";
import { loadMessages } from "./languages";
import "./styles/go-message-error.scss";

const MessageError = ({ locale = "en-GB", text = "" }: MessageErrorType) => {
    return (
        <div className="go-message-error go-message-error-no-select">
            <div className="go-message-container">
                <div className="go-message-icon">
                    <ExclamationCircle />
                </div>
                <div className="go-message-text">
                    {`${loadMessages(locale).MESSAGE}${text == null ? loadMessages(locale).NULL : ` "${text}"`}`}
                </div>
            </div>
        </div>
    );
};

export default MessageError;

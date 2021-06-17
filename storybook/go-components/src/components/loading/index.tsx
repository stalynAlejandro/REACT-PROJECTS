import React from "react";
import { loadingPropsType } from "./types/types";
import { loadMessages } from "./languages";

import "./styles/loading.scss";

const Loading = ({ message, locale = "en-GB" }: loadingPropsType) => {
    return (
        <div className="loading-main-container">
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="loading-message">
                {message || loadMessages(locale).LOADING_MESSAGE}
            </div>
        </div>
    );
};

export default Loading;

import React from "react";
import { errorPropsType } from "./types/types";
import { loadMessages } from "./languages";

import "./styles/error.scss";

const Error = ({ message, locale = "en-GB" }: errorPropsType) => {
    return (
        <div className="error__main-container">
            {message || loadMessages(locale).ERROR_MESSAGE}
        </div>
    );
};

export default Error;

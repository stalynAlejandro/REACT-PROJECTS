import React from "react";
import { RadioButtonType } from "./types";
import "./styles/radiobutton.scss";

const RadioButton = ({
    item,
    checked,
    title,
    showTitle = false,
    size = "m",
    disabled = false,
    css = "",
    onChange,
}: RadioButtonType) => {
    const toggleCheck = () => {
        onChange(item);
    };

    return (
        <div className={`go-radio-button ${css}`}>
            <div className="radio-button" onClick={toggleCheck}>
                <div
                    className={`check --${size} ${disabled ? "disabled" : ""}`}
                >
                    {!disabled && checked && (
                        <div className={`checked --${size}`}></div>
                    )}
                </div>
            </div>
            {showTitle && <div className="message">{title}</div>}
        </div>
    );
};

export default RadioButton;

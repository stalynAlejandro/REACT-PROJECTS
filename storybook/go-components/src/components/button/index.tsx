import React from "react";
import { ButtonType } from "./types";
import "./styles/button.scss";

const Button = ({
    textButton,
    color = "blue",
    onClickedButton,
    css,
    disabled = false,
    iconButton = null,
    size = "m",
    ctaButton,
}: ButtonType) => {
    if (!ctaButton) {
        return (
            <button
                type="button"
                className={`go-button go-button__${color} ${
                    css ? css : ""
                } ${size} ${iconButton ? "icon" : ""}  ${
                    ctaButton ? "cta-button" : ""
                }`}
                onClick={() => onClickedButton()}
                disabled={disabled}
            >
                <div className="button-content">
                    {iconButton !== null && (
                        <div className="button-icon">{iconButton}</div>
                    )}
                    {textButton && <span>{textButton}</span>}
                </div>
            </button>
        );
    } else {
        return (
            <button
                type="button"
                className={`go-button ${css ? css : ""} ${size} ${
                    iconButton ? "icon" : ""
                }  ${ctaButton ? "cta-button" : ""}`}
                onClick={() => onClickedButton()}
                disabled={disabled}
            >
                <div className="button-content">
                    {iconButton !== null && (
                        <div className="button-icon">{iconButton}</div>
                    )}
                    {textButton && <span>{textButton}</span>}
                </div>
            </button>
        );
    }
};

export default Button;

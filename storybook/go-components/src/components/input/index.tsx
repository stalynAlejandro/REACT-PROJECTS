import React from "react";
import { inputPropsType } from "./types/types";
import "./styles/input.scss";

const Input = ({
    name,
    type = "text",
    value,
    onChangeInput,
    placeholder,
    label,
    size = "l",
    disabled,
    alternative,
    autoComplete = "on",
}: inputPropsType) => {
    return (
        <div className={`custom-input__main-container ${size} `}>
            {label && (
                <label
                    className={`custom-input__label ${
                        disabled ? "disabled" : ""
                    }`}
                >
                    {label}
                </label>
            )}
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                className={`custom-input__main-input ${size} ${
                    disabled ? "disabled" : ""
                }  ${alternative ? "alternative" : ""}`}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    onChangeInput(event.target.value)
                }
                value={value}
                disabled={disabled}
                autoComplete={autoComplete}
            />
        </div>
    );
};

export default Input;

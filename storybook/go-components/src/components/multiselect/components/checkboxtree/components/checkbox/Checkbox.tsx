import React from "react";
import { CheckboxProps } from "./types";
import "./checkbox.scss";

const Checkbox = ({
    label,
    size = "normal",
    labelSize = "normal",
    semiChecked = false,
    disabled,
    checked,
    onClick,
    onChange,
}: CheckboxProps) => {
    const [selfChecked, setSelfChecked] = React.useState(false);

    const checkboxClassNames = `checkbox__main-container ${
        labelSize === "small" ? "--small" : ""
    } ${labelSize === "normal" ? "--normal" : ""}${
        labelSize === "large" ? "--large" : ""
    }`;

    const checkmarcClassNames = `checkbox__checkmark ${
        semiChecked ? "--semi-checked" : ""
    } ${size === "small" ? "--small" : ""} ${
        size === "normal" ? "--normal" : ""
    } ${size === "large" ? "--large" : ""}`;

    return (
        <label className={checkboxClassNames}>
            {label}
            <input
                onClick={(e) => {
                    onClick && onClick(e);
                    setSelfChecked(!selfChecked);
                }}
                onChange={(e) => {
                    onChange && onChange(e);
                }}
                type="checkbox"
                checked={checked == null ? selfChecked : checked}
                disabled={disabled}
            />
            <span className={checkmarcClassNames}></span>
        </label>
    );
};

export { Checkbox };

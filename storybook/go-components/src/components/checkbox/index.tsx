import React from "react";
import { CheckboxProps } from "./types";
import "./styles/checkbox.scss";

const Checkbox = ({
    label,
    size = "normal",
    semiChecked = false,
    disabled,
    checked,
    onClick,
    onChange,
}: CheckboxProps) => {
    const [selfChecked, setSelfChecked] = React.useState(false);

    const checkboxClassNames = `checkbox__main ${
        size === "small" ? "--small" : ""
    } ${size === "normal" ? "--normal" : ""} ${
        size === "large" ? "--large" : ""
    }`;

    const checkmarcClassNames = `checkbox__checkmark ${
        semiChecked ? "--semi-checked" : ""
    } ${size === "small" ? "--small" : ""} ${
        size === "normal" ? "--normal" : ""
    } ${size === "large" ? "--large" : ""}`;

    return (
        <label className={checkboxClassNames}>
            <span className={`checkbox-title --${size}`}>{label}</span>

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

export default Checkbox;

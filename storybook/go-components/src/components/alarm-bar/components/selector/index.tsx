import React, { useState } from "react";
import AngleDownIcon from "./icons/angledownicon";
import AngleUpIcon from "./icons/angleupicon";
import { SelectorType } from "./types";
import "./styles/selector.scss";

const Selector = ({
    options,
    label = "",
    value,
    onChange,
    disabled = false,
}: SelectorType) => {
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const [dropdownTop, setDropdownTop] = useState<boolean>(false);

    const onOptionSelected = (index: number) => {
        if (!disabled) {
            value = options[index].value;
            onChange(value);
            toggleDropdown(null);
        }
    };

    const toggleDropdown = (evt: any) => {
        if (!disabled) {
            if (!showDropdown) {
                const rect = evt.target.getBoundingClientRect();
                if (window.innerHeight - (rect.top + 36) < 171) {
                    setDropdownTop(true);
                } else {
                    setDropdownTop(false);
                }
            }
            setShowDropdown(!showDropdown);
        }
    };

    const getOptionName = (value: any) => {
        const found = options.find((e) => e.value === value);
        return found ? found.name : "";
    };

    return (
        <div
            className={`selector-bar select-comunication-no-select ${
                disabled ? "disabled" : ""
            }`}
        >
            {label && <div className="select-label">{label}</div>}
            <div
                className="select-comunication-container"
                onClick={toggleDropdown}
            >
                <div className="select-comunication-options">
                    {getOptionName(value)}
                </div>
                <div className="select-comunication-icon">
                    {showDropdown ? <AngleUpIcon /> : <AngleDownIcon />}
                </div>
            </div>
            {showDropdown && (
                <div
                    className={`select-comunication-table ${
                        dropdownTop ? "dropdowntop" : ""
                    }`}
                >
                    <div className="select-comunication-items custom-scrollbar">
                        {options.map((option, index) => (
                            <div
                                className={`select-comunication-item ${
                                    option.value === value ? "selected" : ""
                                }`}
                                key={index}
                                onClick={() => onOptionSelected(index)}
                            >
                                {option.name}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Selector;

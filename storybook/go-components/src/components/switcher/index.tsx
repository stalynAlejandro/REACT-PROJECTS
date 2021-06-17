import React from "react";
import { SwitcherType } from "./types";
import "./styles/switcher.scss";

const Switcher = ({ switcherName, checked, onChange }: SwitcherType) => {
    return (
        <div className="switcher switcher__wrapper">
            <label
                aria-label={switcherName}
                className="switcher__switch"
                htmlFor={switcherName}
            >
                <input
                    type="checkbox"
                    id={switcherName}
                    onChange={onChange}
                    checked={checked}
                    data-testid="switcher__input__checkbox-test"
                />
                <div className="switcher__slider switcher__round"></div>
            </label>
        </div>
    );
};

export default Switcher;

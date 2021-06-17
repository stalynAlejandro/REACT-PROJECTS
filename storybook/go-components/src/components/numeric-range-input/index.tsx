import React, { useState, useEffect } from "react";
import HorizontalRule from "./icons/horizontal-rule-light";
import { numericRangeInputPropsType } from "./types/types";

import "./styles/numeric-range-input.scss";

const NumericRangeInput = ({
    label,
    onChange,
    minValuePlaceholder,
    maxValuePlaceholder,
    size = "m",
    disabled = false,
    alternative,
}: numericRangeInputPropsType) => {
    const [minValue, setMinValue] = useState<string | null>(null);
    const [maxValue, setMaxValue] = useState<string | null>(null);

    useEffect(() => {
        if (minValue && maxValue) {
            const parsedMinValue = parseInt(minValue);
            const parsedMaxValue = parseInt(maxValue);
            onChange([parsedMinValue, parsedMaxValue]);
        }
    }, [minValue, maxValue]);

    return (
        <div
            className={`numeric-range-input__global-container ${size} ${
                disabled ? "disabled" : ""
            }`}
            data-testid="numeric-range-input-main-container"
        >
            <div className="numeric-range-input__label">{label}</div>
            <div
                className={`numeric-range-input__main-container ${
                    alternative ? "alternative" : ""
                } ${disabled ? "disabled" : ""}`}
            >
                <input
                    type="number"
                    placeholder={minValuePlaceholder ? minValuePlaceholder : ""}
                    className="numeric-range-input__input"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setMinValue(event.target.value)
                    }
                    disabled={disabled}
                    data-testid="numeric-range-input-min-value"
                ></input>
                <HorizontalRule />
                <input
                    type="number"
                    placeholder={maxValuePlaceholder ? maxValuePlaceholder : ""}
                    className="numeric-range-input__input"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setMaxValue(event.target.value)
                    }
                    disabled={disabled}
                    data-testid="numeric-range-input-max-value"
                ></input>
            </div>
        </div>
    );
};

export default NumericRangeInput;

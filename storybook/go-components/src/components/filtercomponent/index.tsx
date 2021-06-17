import React, { useState } from "react";
import { FilterComponentType } from "./types";
import ExchangeIcon from "./icons/exchange";
import "./styles/filtercomponent.scss";

const FilterComponent = ({
    firstSelected = true,
    firstCategory,
    secondCategory,
    disabled,
    onChangeCategory,
    size = "m",
    alternative,
}: FilterComponentType) => {
    const [option, setOption] = useState<boolean>(firstSelected);

    const updateOption = () => {
        if(!disabled){
            const status = !option;
            setOption(status);
            status
                ? onChangeCategory(firstCategory)
                : onChangeCategory(secondCategory);
        }
    };

    return (
        <div className={`filter-component ${disabled ? "disabled" : ""} ${size}  ${alternative ? "alternative" : ""}`} onClick={updateOption}>
            <div className={`filter-component-text filter-component-no-select ${size}  ${alternative ? "alternative" : ""}`}>
                {option ? firstCategory.title : secondCategory.title}
            </div>
            <div className={`filter-component-icon ${size}  ${alternative ? "alternative" : ""}`}>
                <ExchangeIcon />
            </div>
        </div>
    );
};

export default FilterComponent;

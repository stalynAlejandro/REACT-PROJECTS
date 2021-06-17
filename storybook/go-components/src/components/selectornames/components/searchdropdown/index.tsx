import React, { useEffect, useState } from "react";
import SearchIcon from "../../icons/search-icon";
import { SearchDropDownType } from "./types";
import { loadMessages } from "./languages";
import { EMPTY } from "../../constants";
import "./styles/searchdropdown.scss";

const SearchDropDown = ({
    size,
    locale = "en-GB",
    clearSerchText,
    onCleared,
    onUpdateItems,
}: SearchDropDownType) => {
    const [value, setValue] = useState<string>("");

    const searchItem = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value: string = event?.target?.value;
        setValue(value);
        value === EMPTY ? onUpdateItems(EMPTY) : onUpdateItems(value);
    };

    useEffect(() => {
        if (clearSerchText) {
            setValue("");
            onCleared();
        }
    }, [clearSerchText, onCleared]);

    return (
        <div className="select-search">
            <input
                type="text"
                className={`select-search-input select-search-input--${size}`}
                placeholder={loadMessages(locale)?.SEARCH}
                value={value}
                onChange={searchItem}
            />
            <div className="select-search-icon">
                <SearchIcon />
            </div>
        </div>
    );
};

export default SearchDropDown;

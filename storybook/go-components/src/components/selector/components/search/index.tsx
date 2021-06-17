import React, { useState } from "react";
import { SearchSelectType } from "./types";
import SearchIcon from "../../icons/search-icon";
import { loadMessages } from "./languages";
import { EMPTY } from "../../constants";
import "./styles/searchselector.scss";

const SearchSelect = ({
    locale = "en-GB",
    show = true,
    onUpdateText,
}: SearchSelectType) => {
    const [value, setValue] = useState<string>("");

    const searchItem = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value: string = event?.target?.value;
        setValue(value);
        value === EMPTY ? onUpdateText(EMPTY) : onUpdateText(value);
    };

    return (
        <React.Fragment>
            {show && (
                <div className="search-select search-select-no-select">
                    <input
                        type="text"
                        className="search-select-input"
                        placeholder={loadMessages(locale).PLACEHOLDER}
                        value={value}
                        onChange={searchItem}
                    />
                    <div className="search-select-icon">
                        <SearchIcon />
                    </div>
                </div>
            )}
        </React.Fragment>
    );
};

export default SearchSelect;

import React, { useEffect, useState } from "react";
import { SearchComponentType } from "./types";
import { loadMessages } from "./languages";
import SearchIcon from "./icons/search";
import "./styles/searchcomponent.scss";

const SearchComponent = ({
    locale = "en-GB",
    size = "m",
    alternative,
    defaultText = "",
    onChangeText,
}: SearchComponentType) => {
    const [value, setValue] = useState<string>("");

    const onUpdateText = (event: React.ChangeEvent<HTMLInputElement>) => {
        const text: string = event.target.value;
        setValue(text);
        onChangeText(text);
    };

    const onClickSearch = (eveny: React.MouseEvent) => {
        onChangeText(value);
    };

    useEffect(() => {
        setValue(defaultText);
    }, [defaultText]);

    return (
        <div
            className={`search-component ${size}  ${
                alternative ? "alternative" : ""
            } `}
        >
            <input
                type="text"
                className={`search-input search-component-no-select ${size}  ${
                    alternative ? "alternative" : ""
                }`}
                placeholder={loadMessages(locale).PLACEHOLDER}
                value={value}
                onChange={onUpdateText}
            />
            <div
                className={`search-component-icon ${size} ${
                    alternative ? "alternative" : ""
                }`}
                onClick={onClickSearch}
            >
                <SearchIcon />
            </div>
        </div>
    );
};

export default SearchComponent;

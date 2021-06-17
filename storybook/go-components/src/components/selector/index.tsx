import React, { useEffect, useState, useRef } from "react";
import AngleDownIcon from "./icons/angledownicon";
import AngleUpIcon from "./icons/angleupicon";
import { SelectorType, OptionType } from "./types";
import "./styles/selector.scss";
import SearchSelect from "./components/search";

const Selector = ({
    locale = "en-GB",
    showSearch = false,
    options,
    label = "",
    value,
    disabled = false,
    onChange,
}: SelectorType) => {
    const refSelector: any = useRef();
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const [dropdownTop, setDropdownTop] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [filteredOptions, setFilteredOptions] = useState<Array<OptionType>>(
        options
    );

    const handleClickOutSide = (event: MouseEvent) => {
        if (
            refSelector.current &&
            !refSelector.current.contains(event.target)
        ) {
            setShowDropdown(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutSide);
        return () =>
            document.removeEventListener("mousedown", handleClickOutSide);
    });

    const onOptionSelected = (index: number) => {
        if (!disabled) {
            value = options[index].value;
            onChange(value);
        }
        toggleDropdown(null);
    };

    const toggleDropdown = (evt: any) => {
        if (!disabled) {
            if (!showDropdown) {
                let rect = evt.target.getBoundingClientRect();
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
        let found = options.find((e) => e.value === value);
        return found ? found.name : "";
    };

    const updateSearchTerm = (text: string) => {
        setSearchTerm(text);
    };

    useEffect(() => {
        let term = searchTerm.toLowerCase();
        if (term) {
            setFilteredOptions(
                options.filter((e) => {
                    return e.name.toLowerCase().includes(term);
                })
            );
        } else {
            setFilteredOptions(options);
        }
    }, [options, searchTerm]);

    return (
        <div
            className={`selector select-comunication-no-select ${
                disabled ? "disabled" : ""
            }`} ref={refSelector}
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
                    } ${showSearch ? "show-search" : ""}`}
                >
                    <SearchSelect
                        locale={locale}
                        show={showSearch}
                        onUpdateText={updateSearchTerm}
                    />
                    <div className="select-comunication-items custom-scrollbar">
                        {filteredOptions.map((option, index) => (
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

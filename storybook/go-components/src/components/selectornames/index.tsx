import React, { useState, useEffect, useRef } from "react";
import ListDropdown from "./components/listdropdown";
import SearchDropDown from "./components/searchdropdown";
import SelectedItem from "./components/selecteditem";
import { loadMessages } from "./languages";
import { SelectorComponentType, ItemType } from "./types";
import { isEmpty, updateSelectedItem } from "./functions";
import "./styles/selector.scss";

const SelectorNames = ({
    items,
    search = false,
    showActive = false,
    disabled = false,
    locale = "en-GB",
    label,
    size = "xl",
    css = "",
    onChangeItems,
}: SelectorComponentType) => {
    const refSelector: any = useRef();
    const notSelected = {
        id: 0,
        description: loadMessages(locale).SELECT,
        selected: false,
    };
    const [enabled, setEnabled] = useState<boolean>(false);
    const [active, setActive] = useState<boolean>(false);
    const [initialItems, setInitialItems] = useState<Array<ItemType>>([]);
    const [selectedItem, setSelectedItem] = useState<ItemType>(notSelected);
    const [isItemSelected, setIsItemSelected] = useState<boolean>(false);
    const [filterText, setFilterText] = useState<string>("");
    const [clear, setClear] = useState<boolean>(false);

    const handleClickOutSide = (event: MouseEvent) => {
        if (
            refSelector.current &&
            !refSelector.current.contains(event.target)
        ) {
            setEnabled(false);
            setActive(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutSide);
        return () =>
            document.removeEventListener("mousedown", handleClickOutSide);
    });

    useEffect(() => {
        setInitialItems(items);
        const itemSelected: ItemType | undefined = items.find(
            (item: ItemType) => item.selected
        );
        if (itemSelected) {
            setSelectedItem(itemSelected);
            setIsItemSelected(true);
        } else {
            setSelectedItem(notSelected);
            setIsItemSelected(false);
        }
        if (isEmpty(items)) {
            setEnabled(false);
        }
    }, [items]);

    const updateEnabled = (): void => {
        if (!disabled) {
            if (isEmpty(items)) return;
            const status = !enabled;
            setEnabled(status);
            setActive(status);
            setFilterText("");
        }
    };

    const updateSearchItems = (filterText: string) => {
        setFilterText(filterText);
    };

    const updateCleared = (): void => {
        setClear(false);
    };

    const selectItem = (item: ItemType) => {
        const updatedItem: ItemType = updateSelectedItem(item);
        setSelectedItem(updatedItem);
        setIsItemSelected(true);
        onChangeItems(updatedItem);
        setEnabled(!enabled);
        setActive(false);
    };

    return (
        <div
            className={`select-names select-names-no-select select-names-size--${size} ${css} ${
                disabled ? "disabled" : ""
            }`}
            ref={refSelector}
        >
            {label && <div className="select-label">{label}</div>}
            <SelectedItem
                locale={locale}
                active={showActive && active ? true : false}
                enabled={enabled}
                item={isItemSelected ? selectedItem : notSelected}
                onUpdateEnabled={updateEnabled}
            />
            {enabled && (
                <div className="select-dropdown">
                    {search && (
                        <SearchDropDown
                            size={size}
                            locale={locale}
                            clearSerchText={clear}
                            onCleared={updateCleared}
                            onUpdateItems={updateSearchItems}
                        />
                    )}
                    <ListDropdown
                        enabled={search}
                        items={initialItems}
                        filterText={filterText}
                        itemSelected={selectedItem}
                        onUpdate={(item: ItemType) => selectItem(item)}
                    />
                </div>
            )}
        </div>
    );
};

export default SelectorNames;

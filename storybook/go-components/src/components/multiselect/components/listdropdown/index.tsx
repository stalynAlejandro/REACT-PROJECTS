import React from "react";
import CheckBox from "./checkbox";
import SelectorListItem from "./selectorlistitem";
import { generateList } from "./functions";
import { ListDropdownType, ItemType } from "./types";
import "./styles/listdropdown.scss";

const ListDropdown = ({
    search,
    items,
    filterText,
    onUpdate,
}: ListDropdownType) => {
    const list: Array<ItemType> = generateList(items, filterText);
    return (
        <div
            className={`multiselect-dropdown-content ${
                !search ? "multiselect-dropdown-content-top" : ""
            } list-drop-down-custom-scrollbar`}
        >
            <div className="multiselect-dropdown-items">
                {Array.isArray(list) &&
                    list.map((item: ItemType, index: number) => {
                        return (
                            <div className="multiselect-item-row" key={index}>
                                <CheckBox
                                    item={item}
                                    onChangeItem={(item: ItemType) =>
                                        onUpdate(item)
                                    }
                                />
                                {item && (
                                    <SelectorListItem
                                        id={item.id}
                                        description={item.description}
                                    />
                                )}
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default ListDropdown;

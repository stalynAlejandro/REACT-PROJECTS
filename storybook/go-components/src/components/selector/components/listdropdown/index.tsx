import React from "react";
import SelectorListItem from "./components/selectorlistitem";
import { ListDropdownType, ItemType } from "./types";
import { generateList } from "./functions";
import "./styles/listdropdown.scss";

const ListDropdown = ({
    items,
    filterText,
    itemSelected,
    onUpdate,
}: ListDropdownType) => {
    const list: Array<ItemType> = generateList(items, filterText);
    return (
        <div className="select-dropdown-content custom-scrollbar">
            <div className="select-dropdown-items">
                {Array.isArray(list) &&
                    list.map((item: ItemType, index: number) => {
                        return (
                            <div
                                className="select-item-row"
                                key={index}
                                onClick={() => onUpdate(item)}
                            >
                                <SelectorListItem
                                    id={item.id}
                                    description={item.description}
                                    itemSelected={itemSelected.description}
                                />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default ListDropdown;

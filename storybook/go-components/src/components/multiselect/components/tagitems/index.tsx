import React, { useEffect, useState } from "react";
import ArrowUpIcon from "../../icons/arrowup-icon";
import ArrowDownIcon from "../../icons/arrowdown-icon";
import CloseIcon from "../../icons/close-icon";
import { TagItemsType, ItemType } from "./types";
import { splitText } from "./functions";
import { loadMessages } from "./languages";
import "./styles/tagitems.scss";

const TagItems = ({
    locale = "en-GB",
    size = "l",
    clear,
    all,
    error,
    enabled,
    disabled,
    items,
    onCleared,
    onAll,
    onUpdateEnabled,
    onRemove,
    alternative,
}: TagItemsType) => {
    const [selectedItems, setSelectedItems] = useState<Array<ItemType>>([]);

    useEffect(() => {
        if (disabled) return;
        const selecteds: Array<ItemType> = items.filter(
            (item: ItemType) => item.selected
        );
        if (selecteds.length === items.length) {
            const item: ItemType = {
                id: -1,
                description: `${loadMessages(locale).ALL_SELECTED}`,
                selected: true,
            };
            setSelectedItems([item]);
        } else {
            if (selecteds.length <= 3) {
                setSelectedItems(selecteds);
            } else {
                const topSelected: Array<ItemType> = selecteds.slice(0, 3);
                setSelectedItems(topSelected);
            }
        }
        onCleared();
        onAll();
    }, [items, clear, all, locale, onAll, onCleared]);

    const onToggleDropdown = (e: React.MouseEvent) => {
        onUpdateEnabled(e);
    };

    return (
        <div
            className={`multiselect-items ${alternative ? "alternative" : ""} ${
                disabled ? "disabled" : ""
            } ${error ? "error" : ""}`}
            onClick={onToggleDropdown}
        >
            {Array.isArray(selectedItems) && selectedItems.length === 0 ? (
                <div className="multiselect-noitems multiselect-no-select">
                    {loadMessages(locale).NO_SELECTED}
                </div>
            ) : (
                Array.isArray(selectedItems) &&
                selectedItems.map((item: ItemType, index: number) => {
                    const css =
                        item.id === -1
                            ? "multiselect-item-all"
                            : index < 2
                            ? "multiselect-item"
                            : `multiselect-item-last multiselect-item-last-${size} gradient-multiselect-item`;
                    return item?.selected ? (
                        <div
                            key={index}
                            className={css}
                            onClick={(e) => {
                                e.stopPropagation();
                            }}
                        >
                            <div className="multiselect-item-content">
                                <span
                                    className={`multiselect-no-select ${
                                        index === 2
                                            ? "gradient-multiselect-item-title"
                                            : ""
                                    }`}
                                    title={item?.description}
                                >
                                    {item.id === -1
                                        ? item.description
                                        : splitText(item.description)}
                                </span>
                            </div>
                            {index !== 2 && (
                                <div
                                    className="multiselect-close-icon"
                                    onClick={() => onRemove(item)}
                                >
                                    <CloseIcon />
                                </div>
                            )}
                        </div>
                    ) : null;
                })
            )}

            <div className="multiselect-icon-content multiselect-no-select">
                <div
                    className={`multiselect-icon multiselect-no-select ${
                        disabled && "disabled"
                    } `}
                >
                    {enabled ? (
                        <ArrowUpIcon onClick={onToggleDropdown} />
                    ) : (
                        <ArrowDownIcon onClick={onToggleDropdown} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default TagItems;

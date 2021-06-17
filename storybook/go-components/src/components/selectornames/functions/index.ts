import { ItemType } from "../types";

export const isEmpty = (items: Array<ItemType>) => {
    return Array.isArray(items) && items.length === 0 ? true : false;
};

export const updateSelectedItem = (item: ItemType) => {
    const updated = Object.assign({}, item, {
        selected: true,
    });
    return updated;
};

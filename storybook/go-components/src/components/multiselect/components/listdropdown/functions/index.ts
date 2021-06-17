import { ItemType } from "../types";
import { EMPTY } from "../constants";

export const generateList = (
    items: Array<ItemType>,
    filterText: string
): Array<ItemType> => {
    if (filterText === EMPTY) {
        return items;
    } else {
        const newList: Array<ItemType> = items.filter(
            (item: ItemType) =>
                item.description
                    .toLocaleLowerCase()
                    .indexOf(filterText.toLocaleLowerCase()) >= 0
        );
        return newList;
    }
};

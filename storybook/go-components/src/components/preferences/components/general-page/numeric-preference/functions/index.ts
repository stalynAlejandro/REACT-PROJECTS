import { DataType } from "./../../../../types/index";

export const updateRadio = (radio: DataType | null, status: boolean) => {
    const updated = Object.assign({}, radio, {
        selected: status,
    });
    return updated;
};

export const restoreSeparatorWithItemActive = (
    items: DataType[],
    itemSelected: DataType | null
) => {
    const updatedItems: DataType[] = [];
    items.forEach((item: DataType) => {
        let itemUpdated: DataType;
        if (item.value === itemSelected?.value) {
            itemUpdated = Object.assign({}, item, {
                selected: true,
            });
        } else {
            itemUpdated = Object.assign({}, item, {
                selected: false,
            });
        }
        updatedItems.push(itemUpdated);
    });
    return updatedItems;
};

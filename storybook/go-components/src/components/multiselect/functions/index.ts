import { ItemType } from "../types";

export const initializeItems = (
    items: Array<ItemType>,
    defaultSelected: boolean | undefined
) => {
    const updatedItems: Array<ItemType> = [];
    if (Array.isArray(items) && items.length > 0) {
        items.forEach((item: ItemType) => {
            const updatedItem: ItemType = Object.assign({}, item, {
                selected:
                    defaultSelected !== undefined
                        ? defaultSelected
                        : item.selected,
            });
            updatedItems.push(updatedItem);
        });
    }
    return updatedItems;
};

export const initializeNodeItems = (nodes: any, defaultSelected = false) => {
    const updatedItems: Array<ItemType> = [];

    const dmaExtractor = (children: any) => {
        children.forEach((child: any) => {
            const updatedItem: ItemType = {
                selected: defaultSelected,
                description: child.label,
                id: child.value,
            };
            updatedItems.push(updatedItem);
            if (Array.isArray(child?.children)) {
                dmaExtractor(child?.children);
            }
        });
    };
    if (Array.isArray(nodes)) {
        dmaExtractor(nodes);
    }
    return updatedItems;
};

export const updateNodesItems = (nodes: any, nodesChecked: any) => {
    const updatedItemsChecked: Array<ItemType> = [];
    const dmaExtractor = (children: any) => {
        children.forEach((child: any) => {
            updatedItemsChecked.push({
                description: child.label,
                id: child.value,
                selected: nodesChecked.includes(child.value),
            });

            if (Array.isArray(child?.children)) {
                dmaExtractor(child?.children);
            }
        });
    };
    if (Array.isArray(nodes)) {
        dmaExtractor(nodes);
    }
    return updatedItemsChecked;
};

export const removeNode = (
    nodes: any,
    nodesChecked: Array<string>,
    nodeToRemove: ItemType
) => {
    let updatedNodesChecked: Array<string> = [];
    let itemFinded = false;

    if (nodeToRemove.id === -1) {
        return updatedNodesChecked;
    }
    const dmaExtractor = (children: any) => {
        children.forEach((child: any) => {
            if (child.value === nodeToRemove.id) {
                itemFinded = true;
                updatedNodesChecked = nodesChecked.filter(
                    (nodeId) => nodeId !== nodeToRemove.id
                );
                updatedNodesChecked = removeChildren(
                    child.children,
                    updatedNodesChecked
                );
            }
            if (!itemFinded) {
                if (Array.isArray(child?.children)) {
                    dmaExtractor(child?.children);
                }
            }
        });
    };
    if (Array.isArray(nodes)) {
        dmaExtractor(nodes);
    }
    return updatedNodesChecked;
};

const removeChildren = (nodes: any, nodesChecked: Array<string>) => {
    let updatedChildrenChecked: Array<string> = [...nodesChecked];

    const dmaExtractor = (children: any) => {
        children.forEach((child: any) => {
            updatedChildrenChecked = updatedChildrenChecked.filter(
                (nodeId) => nodeId !== child.value
            );

            if (Array.isArray(child?.children)) {
                dmaExtractor(child?.children);
            }
        });
    };
    if (Array.isArray(nodes)) {
        dmaExtractor(nodes);
    }
    return updatedChildrenChecked;
};

export const selectAll = (
    items: Array<ItemType>,
    selectAll: boolean
): Array<ItemType> => {
    const updatedItems: Array<ItemType> = [];
    const copyItems: Array<ItemType> = [...items];
    copyItems.forEach((item: ItemType) => {
        const updatedItem: ItemType = Object.assign({}, item, {
            selected: selectAll,
        });
        updatedItems.push(updatedItem);
    });
    return updatedItems;
};

export const getAllNodeIds = (nodes: any) => {
    const ids: Array<string> = [];
    const dmaExtractor = (children: any) => {
        children.forEach((child: any) => {
            ids.push(child.value);
            if (Array.isArray(child?.children)) {
                dmaExtractor(child?.children);
            }
        });
    };
    if (Array.isArray(nodes)) {
        dmaExtractor(nodes);
    }
    return ids;
};

/* Unuse */
export const cloneArray = (array: Array<ItemType>): Array<ItemType> => {
    const cloned: Array<ItemType> = array.map((item: ItemType) => ({
        ...item,
    }));
    return cloned;
};

// revisar
export const replaceItemInArray = (
    item: ItemType,
    array: Array<ItemType>
): Array<ItemType> => {
    const selectedItem: Array<ItemType> = [item];
    const updatedItems: Array<ItemType> = array.map(
        (item: ItemType) =>
            selectedItem.find((i: ItemType) => i.id === item.id) || item
    );
    return updatedItems;
};

export const updateArray = (item: ItemType, array: Array<ItemType>) => {
    let updatedItems: Array<ItemType> = [];
    if (item.id === -1) {
        updatedItems = selectAll(array, false);
    } else {
        const updatedItem: ItemType = Object.assign({}, item, {
            selected: false,
        });
        updatedItems = replaceItemInArray(updatedItem, array);
    }
    return updatedItems;
};

/* Unuse */
export const findItemsWithId = (items: Array<ItemType>, ids: Array<number>) => {
    const searchedItems: Array<ItemType> = items.filter((item: ItemType) =>
        ids.includes(+item.id)
    );
    return searchedItems;
};

export const cloneDeep = (item: any) => {
    if (item == null) {
        return item;
    } // null, undefined values check

    const types = [Number, String, Boolean];
    let primitiveType;
    let result: any;

    // normalizing primitives if someone did new String('aaa'), or new Number('444');
    types.forEach(function (type) {
        if (item instanceof type) {
            primitiveType = type(item);
        }
    });

    if (typeof primitiveType == "undefined") {
        if (Object.prototype.toString.call(item) === "[object Array]") {
            result = [];
            item.forEach(function (child: any, index: number) {
                result[index] = cloneDeep(child);
            });
        } else if (typeof item == "object") {
            // testing that this is DOM
            if (item.nodeType && typeof item.cloneNode == "function") {
                result = item.cloneNode(true);
            } else if (!item.prototype) {
                // check that this is a literal
                if (item instanceof Date) {
                    result = new Date(item);
                } else {
                    // it is an object literal
                    result = {};
                    for (const i in item) {
                        result[i] = cloneDeep(item[i]);
                    }
                }
            } else {
                // depending what you would like here,
                // just keep the reference, or create new object
                // eslint-disable-next-line no-constant-condition
                if (false && item.constructor) {
                    // would not advice to do that, reason? Read below
                    result = new item.constructor();
                } else {
                    result = item;
                }
            }
        } else {
            result = item;
        }
    }

    return result;
};

// Buscador por texto
export const searchByTitleDmas = (nodes: any, text: string) => {
    const updatedNodes: any = [];

    const dmaExtractor = (children: any) => {
        children.forEach((child: any) => {
            if (child.label.toLowerCase().includes(text.toLowerCase())) {
                updatedNodes.push(child);
            }

            if (child && child.children && Array.isArray(child.children)) {
                dmaExtractor(child.children);
            }
        });
    };

    if (Array.isArray(nodes)) {
        dmaExtractor(nodes);
    }

    return updatedNodes;
};

export type MultiSelectType = {
    items?: Array<ItemType>;
    selected?: boolean | undefined;
    search: boolean;
    locale?: string;
    label?: string;
    size?: SizeTypes;
    disabled?: boolean;
    error?: boolean;
    errorMessage?: string;
    onChangeItems?: (items: Array<ItemType>) => void;
    onChangeNodes?: (checked: Array<string>, expanded: Array<string>) => void;
    type?: MultiselectCheckboxType;
    nodes?: any;
    nodesCheckedByDefault?: Array<string>;
    nodesExpandedByDefault?: Array<string>;
    alternative?: boolean;
};

type SizeTypes = "l" | "m";

export type ItemType = {
    id: number | string;
    description: string;
    selected: boolean;
};

export enum MultiselectCheckboxType {
    CHECKLIST = "checklist",
    CHECKTREE = "checktree",
}

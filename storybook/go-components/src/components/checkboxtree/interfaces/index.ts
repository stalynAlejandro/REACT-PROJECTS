export type CheckboxTreeProps = {
    nodes: any;
    disabled: boolean;
    iconsClass: string;
    nativeCheckboxes: any;
    checkModel: string;
    noCascade: boolean;
    onCheck: Function;
    expandDisabled: boolean;
    expandOnClick: boolean;
    icons: any;
    lang: any;
    onClick: Function;
    onlyLeafCheckboxes: boolean;
    optimisticToggle: boolean;
    showNodeTitle: boolean;
    showNodeIcon: boolean;
    showNodeCheckbox: boolean;
    checked: Array<string>;
    id: string;
    onExpand: Function;
    showExpandAll: boolean;
    nameAsArray: any;
    name: any;
    expanded: Array<string>;
};

export type icons = {
    check: any;
    uncheck: any;
    halfCheck: any;
    expandClose: any;
    expandOpen: any;
    expandAll: any;
    collapseAll: any;
    parentClose: any;
    parentOpen: any;
    leaf: any;
    toggle: string;
};

export type nodeType = {
    label: string;
    value: any;
    disabled: boolean;
    icon?: any;
    showCheckbox: boolean;
    title?: string;
    children: any[];
    parent: any;
    isChild: boolean;
    isParent: boolean;
    isLeaf: boolean;
    treeDepth: any;
    index: number;
    expanded?: boolean;
    checked?: boolean;
    checkState?: any;
};

export type Nodes = {
    [key: string]: nodeType;
};

export type ButtonProps = {
    title: string;
    className?: string;
    disabled?: boolean;
    onClick: (event: any) => void;
};

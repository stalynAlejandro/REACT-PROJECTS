export type TabsProps = {
    showScroll: boolean;
    detailView: boolean;
    redraw?: boolean;
    activeTab: { id: string };
    tabsProps: { style: React.CSSProperties };
    children: Array<React.ReactNode>;
};

export type TabsState = {
    tabsElements: Array<React.ReactNode>;
};

export type ListTabsStyle = {
    detailView: boolean;
    children: React.ReactNode;
};

export type TabTitleItemStyle = {
    key: number;
    id: string;
    children: React.ReactNode;
    innerRef: (tabElement: any) => void;
};

export type ActiveTabBorderType = {
    activeTab: string;
    detailView: boolean;
    activeTabElement: ActiveTabElementType;
};

type ActiveTabElementType = {
    offsetWidth: string;
    offsetLeft: string;
};

export type TabAnchorItemType = {
    activeTab: string;
    detailView: boolean;
    isActiveTab: boolean;
    children: React.ReactNode;
    tabIndex: number;
    onClick?: (event: any) => void;
    onKeyPress?: (event: any) => void;
};

export type TabsContainerType = {
    children: React.ReactNode;
};

export type ReactTabsType = {
    scroll: boolean;
    children: React.ReactNode;
};

export type TabType = {
    id: string;
    title: string;
    tabIndex: string | number | undefined;
};

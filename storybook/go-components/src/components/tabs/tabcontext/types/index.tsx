export type TabProviderProps = {
    activeTab: { id: string };
    redraw: boolean;
    children: React.ReactNode;
};

export type TabProviderState = {
    tabs: Array<TabType>;
    prevActiveTab: ActiveType;
    activeTab: ActiveType;
};

export type TabType = {
    id: string;
    tabIndex: string | number | undefined;
    title: string;
};

export type ActiveType = {
    id: string | null;
};

export type TabsContextType = React.Context<{
    context: {
        prevActiveTab: {};
        activeTab: {
            id: null;
        };
        tabs: never[];
        addTab: (tab: TabType) => void;
        removeTab: (tab: string) => void;
        onClick: (tab: TabType) => () => void;
    };
}>;

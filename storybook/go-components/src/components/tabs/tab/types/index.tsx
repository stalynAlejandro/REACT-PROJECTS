export type TabStyle = {
    id: string;
    title: string;
    tabIndex?: string | number;
    children: JSX.Element;
    onSelectedTab?: (activeTab: string | null) => void;
};

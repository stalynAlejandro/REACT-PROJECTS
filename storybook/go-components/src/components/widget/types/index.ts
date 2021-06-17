export type WidgetType = {
    title: string;
    children?: React.ReactNode;
    expanded?: boolean;
    showExpanded?: boolean;
    hasOptions?: boolean;
    ellipsisMenu?: React.ReactNode | null;
    expandIcon?: React.ReactNode | null;
    style: React.CSSProperties;
};

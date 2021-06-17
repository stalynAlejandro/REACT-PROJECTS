export interface PaginationProps {
    totalItems: number;
    itemsPerPage: number;
    page: number;
    PageButtonComponent?: React.ElementType;
    onSelectedPage: (page: number) => void;
    disabled?: boolean;
    locale: string;
    size?: "l" | "m" | "s";
    infinite?: boolean;
}

export interface DefaultButtonProps {
    className: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    children: React.ReactNode;
}

export interface Page {
    value: number;
    label: string;
}

export type ToastType = {
    locale?: string;
    percentage?: number;
    loaderTitle?: string;
    size: sizeType;
    toastList: Array<ToastItemType>;
    position?: PositionType;
    type?: Type;
    autoDelete?: boolean;
    dismissTime?: number;
    onRemoveToast: (id: number) => void;
    onResult: () => void;
};

export type ToastItemType = {
    id: number;
    title: string;
    description: string;
    type: typeItemType;
};

export type sizeType = "default" | "bigger";

export type typeItemType =
    | "success"
    | "danger"
    | "info"
    | "warning"
    | "goaigua";

export type NormalNotificationType = {
    list: Array<ToastItemType>;
    position: PositionType;
    loadIcon: (type: typeItemType) => React.ReactNode | null;
    deleteToast: (id: number) => void;
};

export type PositionType =
    | "top-right"
    | "top-left"
    | "bottom-left"
    | "bottom-right"
    | "center"
    | "none-center";

type Type = "normal" | "loader" | "completed" | "simple" | "warning";

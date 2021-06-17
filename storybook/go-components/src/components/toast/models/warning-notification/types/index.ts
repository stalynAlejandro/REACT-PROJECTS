import { PositionType, ToastItemType } from "../../../types";

export type WarningNotificationType = {
    locale?: string;
    position: PositionType;
    list: ToastItemType[];
    onClose: (id: number) => void;
    deleteToast: (id: number) => void;
};

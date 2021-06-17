import { ToastItemType, PositionType, sizeType } from "../../../types";

export type CompletedNotificationType = {
    locale?: string;
    size: sizeType;
    list: ToastItemType[];
    position: PositionType;
    onResult: () => void;
    deleteToast: (id: number) => void;
};

import { ToastItemType, PositionType, sizeType } from "../../../types";

export type SimpleNotificationType = {
    size: sizeType;
    list: ToastItemType[];
    position: PositionType;
    deleteToast: (id: number) => void;
};

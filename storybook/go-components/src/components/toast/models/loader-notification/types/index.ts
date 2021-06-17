import { ToastItemType, PositionType, sizeType } from "../../../types";

export type LoaderNotificationType = {
    title: string;
    percentage: number;
    size: sizeType;
    list: ToastItemType[];
    position: PositionType;
    deleteToast: (id: number) => void;
};

import {
    ToastItemType,
    PositionType,
    typeItemType,
    sizeType,
} from "../../../types";

export type NormalNotificationType = {
    size: sizeType;
    list: ToastItemType[];
    position: PositionType;
    loadIcon: (type: typeItemType) => React.ReactNode;
    deleteToast: (id: number) => void;
};

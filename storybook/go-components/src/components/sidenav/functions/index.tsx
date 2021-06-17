import { ICON_POSITION } from "../constants";
import { ButtonModelType } from "../types";

export const calculateNumTopButtons = (
    buttons: Array<ButtonModelType>
): number => {
    if (!Array.isArray(buttons)) return 0;
    const topButtons: Array<ButtonModelType> | undefined = buttons?.filter(
        (button: ButtonModelType) => button?.position === ICON_POSITION.TOP
    );
    return Array.isArray(topButtons) ? topButtons?.length : 0;
};

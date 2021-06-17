import { NotificationType } from "../../types";

export const removeDuplicates = (
    notifications: NotificationType[]
): NotificationType[] => {
    const filtered = notifications.reduce(
        (unique: any, o: NotificationType) => {
            if (!unique.some((obj: NotificationType) => obj.id === o.id)) {
                unique.push(o);
            }
            return unique;
        },
        []
    );
    return filtered;
};

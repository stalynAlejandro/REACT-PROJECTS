import { NotificationType } from "../../types";
import { updateReadNotification } from "../update-notifications";

export const updateAsRead = (
    notificationsNew: NotificationType[],
    notificationsRead: NotificationType[],
    id: number,
    read: boolean
) => {
    const updatedNotifications = updateReadNotification(
        notificationsNew,
        id,
        read
    );
    const filteredNotifications = updatedNotifications.filter(
        (n: NotificationType) => !n.read
    );
    const readNotifications = updatedNotifications.filter(
        (n: NotificationType) => n.read
    );
    const updatedRead = notificationsRead.concat(readNotifications);
    return { read: filteredNotifications, notRead: updatedRead };
};

export const updateAsNotRead = (
    notificationsNew: NotificationType[],
    notificationsRead: NotificationType[],
    id: number,
    read: boolean
) => {
    const updatedNotifications = updateReadNotification(
        notificationsRead,
        id,
        read
    );
    const notReadNotifications = updatedNotifications.filter(
        (n: NotificationType) => !n.read
    );
    const readNotifications = updatedNotifications.filter(
        (n: NotificationType) => n.read
    );
    const updatedReaded = notificationsNew.concat(notReadNotifications);
    return { read: updatedReaded, notRead: readNotifications };
};

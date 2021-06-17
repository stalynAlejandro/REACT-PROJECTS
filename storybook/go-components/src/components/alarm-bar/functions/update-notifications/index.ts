import { NotificationType } from "../../types";

export const updateReadNotification = (
    notifications: NotificationType[],
    idNotification: number,
    read: boolean
): NotificationType[] => {
    const foundedNotification:
        | NotificationType
        | undefined = notifications.find(
        (n: NotificationType) => n.id === idNotification
    );
    if (!foundedNotification) return [];
    const updatedNotification = updateNotification(foundedNotification, read);
    const updatedListNotification = replaceNotificationInArray(
        notifications,
        updatedNotification
    );
    return updatedListNotification;
};

const updateNotification = (
    notification: NotificationType,
    read: boolean
): NotificationType => {
    const updated = Object.assign({}, notification, {
        read: read,
    });
    return updated;
};

const replaceNotificationInArray = (
    list: NotificationType[],
    notification: NotificationType
): NotificationType[] => {
    const updatedNotification: NotificationType[] = [notification];
    const updatedList: Array<NotificationType> = list.map(
        (obj) => updatedNotification.find((o) => o.id === obj.id) || obj
    );
    return updatedList;
};

export const markAllNotifications = (notifications: NotificationType[]) => {
    const updatedNotifications: NotificationType[] = [];

    notifications.forEach((notification: NotificationType) => {
        const updated = updateNotification(notification, true);
        updatedNotifications.push(updated);
    });
    return updatedNotifications;
};

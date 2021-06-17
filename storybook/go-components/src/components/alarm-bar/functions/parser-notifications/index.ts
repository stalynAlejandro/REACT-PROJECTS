import { NotificationType, LocaleString } from "../../types";
import BellIcon from "../../icons/notifications/bellicon";
import WrenchIcon from "../../icons/notifications/wrenchicon";

// Public functions

export const loadNotifications = (
    showRead: boolean,
    newNotifications: NotificationType[],
    readNotifications: NotificationType[]
) => {
    const totalNotifications = showRead ? readNotifications : newNotifications;
    return totalNotifications;
};

export const filterNotifications = (
    locale: LocaleString,
    read: boolean,
    notifications: any,
    dateFormat?: string
) => {
    if (notifications?.numpages && notifications?.numpages === 0) return [];
    const readNotifications = notifications?.pageData;
    if (!Array.isArray(readNotifications)) return [];
    const filteredReadNotifications = parseNewNotifications(
        locale,
        read,
        readNotifications,
        dateFormat
    );
    return filteredReadNotifications;
};

export const formatDateWithScheme = (date: Date, scheme: string) => {
    const dateDay: number = date.getDate();
    const dateMonth: number = date.getMonth() + 1;
    const dateYear: number = date.getFullYear();

    const day: string = dateDay < 10 ? `0${dateDay}` : `${dateDay}`;
    const month: string = dateMonth < 10 ? `0${dateMonth}` : `${dateMonth}`;

    scheme = scheme.replace("A", "Y");
    let schemeUppercase = scheme.toUpperCase();
    let countYears: number | undefined = schemeUppercase.match(
        new RegExp("Y", "g")
    )?.length;
    if (countYears === undefined) countYears = 4;

    const year: string =
        countYears === 4
            ? `${dateYear}`
            : date.getFullYear().toString().substr(-2);

    const yearTimes = "Y".repeat(countYears);
    schemeUppercase = schemeUppercase.replace("DD", day);
    schemeUppercase = schemeUppercase.replace("MM", month);
    schemeUppercase = schemeUppercase.replace(yearTimes, year);
    return schemeUppercase;
};

// Private Functions

const parseNewNotifications = (
    locale: LocaleString,
    isRead: boolean,
    notifications: any[],
    dateFormat?: string
): NotificationType[] => {
    const parsedNotifications: NotificationType[] = [];
    if (notifications.length > 0) {
        notifications.forEach((notification: any) => {
            const item: NotificationType = {
                id: notification.id,
                title: updateTitle(notification?.alarmType?.code),
                description: notification.message,
                date: generateDate(notification.created, locale, dateFormat),
                icon: getIconFromCode(notification?.alarmType?.code),
                alarm: getIsAlarmFromCode(notification?.alarmType?.code),
                read: isRead,
            };
            parsedNotifications.push(item);
        });
    }
    return parsedNotifications;
};

const updateTitle = (title: string) => {
    return title.replace(/_/g, " ");
};

const generateDate = (
    dateString: string,
    locale: LocaleString,
    dateFormat?: string
): string => {
    const date: Date = new Date(dateString);
    if (dateFormat) {
        return formatDateWithScheme(date, dateFormat);
    }
    return date.toLocaleDateString(locale);
};

const getIconFromCode = (code: string): React.ReactNode => {
    switch (code) {
        case "STOPPED_SENSOR":
            return BellIcon;
        case "MOCK_WRENCH":
            return WrenchIcon;
        default:
            return BellIcon;
    }
};

const getIsAlarmFromCode = (code: string): boolean => {
    switch (code) {
        case "STOPPED_SENSOR":
            return true;
        case "MOCK_WRENCH":
            return false;
        default:
            return true;
    }
};

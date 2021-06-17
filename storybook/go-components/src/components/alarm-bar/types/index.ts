export type AlarmbarType = {
    newNotifications: ReadedNotificationType;
    readNotifications: ReadedNotificationType;
    show: boolean;
    locale: LocaleString;
    dateFormat?: string;
    onUpdatePage: (page: number, read: boolean) => void;
    onChangeValue: (id: number) => void;
    onReadNotification: (id: number, read: boolean) => void;
    onMassiveUpdate: (update: boolean) => void;
    onShowRead: (read: boolean) => void;
};

export type LocaleString = "en-GB" | "en-US" | "es-ES" | "ca-ES";

export type ReadedNotificationType = {
    numpages: number;
    pageData: Array<NotificationType>;
    total?: number;
};

export type OptionType = {
    name: string;
    value: string;
};

export type ItemType = {
    id: number;
    description: string;
    selected: boolean;
};

export type NotificationType = {
    id: number;
    title: string;
    description: string;
    date: string;
    icon: any;
    alarm: boolean;
    read: boolean;
};

export type DateType = {
    id: number;
    date: Date;
};

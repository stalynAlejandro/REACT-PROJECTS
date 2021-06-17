export type NotificationType = {
    notification: Notification;
    showRead: boolean;
    onCloseEye: (id: number, closed: boolean) => void;
};

type Notification = {
    id: number;
    title: string;
    description: string;
    date: string;
    icon: any;
    alarm: boolean;
    read: boolean;
};

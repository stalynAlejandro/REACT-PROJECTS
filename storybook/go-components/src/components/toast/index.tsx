import React, { useState, useEffect } from "react";
import SuccessIcon from "./icons/sucess-icon";
import InfoIcon from "./icons/info-icon";
import WarningIcon from "./icons/warning-icon";
import ErrorIcon from "./icons/error-icon";
import NormalNotification from "./models/normal-notification";
import SimpleNotification from "./models/simple-notification";
import CompletedNotification from "./models/operation-completed";
import LoaderNotification from "./models/loader-notification";
import WarningNotification from "./models/warning-notification";
import { TypeToasts } from "./constants";
import { ToastType, ToastItemType, typeItemType } from "./types";
import "./styles/toast-notification.scss";

const Toast = ({
    locale = "en-GB",
    loaderTitle = "",
    percentage = 0,
    size = "default",
    toastList,
    position = "top-right",
    type = "normal",
    autoDelete = true,
    dismissTime = 2000,
    onResult,
    onRemoveToast,
}: ToastType) => {
    const [list, setList] = useState<ToastItemType[]>(toastList);

    useEffect(() => {
        setList([...toastList]);
        // eslint-disable-next-line
    }, [toastList]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (autoDelete && toastList.length && list.length) {
                deleteToast(toastList[0].id);
            }
        }, dismissTime);

        return () => {
            clearInterval(interval);
        };
        // eslint-disable-next-line
    }, [toastList, autoDelete, dismissTime, list]);

    const deleteToast = (id: number) => {
        const listItemIndex: number = list.findIndex((e) => e.id === id);
        const toastListItem: number = toastList.findIndex((e) => e.id === id);
        list.splice(listItemIndex, 1);
        toastList.splice(toastListItem, 1);
        setList([...list]);
        onRemoveToast(toastListItem);
    };

    const onCloseWithAction = (id: number) => {
        deleteToast(id);
        onResult();
    };

    const loadIcon = (type: typeItemType) => {
        switch (type) {
            case "success":
                return <SuccessIcon />;
            case "danger":
                return <ErrorIcon />;
            case "warning":
                return <WarningIcon />;
            case "info":
                return <InfoIcon />;
            default:
                return null;
        }
    };

    return (
        <React.Fragment>
            {type === TypeToasts.NORMAL && (
                <NormalNotification
                    size={size}
                    list={toastList}
                    position={position}
                    loadIcon={loadIcon}
                    deleteToast={deleteToast}
                />
            )}
            {type === TypeToasts.SIMPLE && (
                <SimpleNotification
                    size={size}
                    list={toastList}
                    position={position}
                    deleteToast={deleteToast}
                />
            )}
            {type === TypeToasts.COMPLETED && (
                <CompletedNotification
                    locale={locale}
                    size={size}
                    list={toastList}
                    position={position}
                    onResult={onResult}
                    deleteToast={deleteToast}
                />
            )}
            {type === TypeToasts.LOADER && (
                <LoaderNotification
                    title={loaderTitle}
                    percentage={percentage}
                    size={size}
                    list={toastList}
                    position={position}
                    deleteToast={deleteToast}
                />
            )}
            {type === TypeToasts.WARNING && (
                <WarningNotification
                    locale={locale}
                    position={position}
                    list={toastList}
                    deleteToast={deleteToast}
                    onClose={onCloseWithAction}
                />
            )}
        </React.Fragment>
    );
};

export default Toast;

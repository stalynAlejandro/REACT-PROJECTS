import React, { useEffect, useState } from "react";
import Selector from "./components/selector";
import Checkbox from "./components/checkbox";
import Notification from "./components/notification";
import { loadMessages } from "./languages";
import { AlarmbarType, NotificationType, ItemType, OptionType } from "./types";
import {
    loadNotifications,
    filterNotifications,
} from "./functions/parser-notifications";
import { removeDuplicates } from "./functions/duplications";
import { markAllNotifications } from "./functions/update-notifications";
import { updateAsRead, updateAsNotRead } from "./functions/change-status";
import {
    generateOptions,
    INIT_OPTION,
    MINIM_PAGE,
    OPTION_ALL_DAYS,
} from "./constants";
import "./styles/alarmbar.scss";
import "./styles/custom-scroll.scss";

const Alarmbar = ({
    newNotifications,
    readNotifications,
    show = false,
    locale = "en-GB",
    onShowRead,
    onUpdatePage,
    onChangeValue,
    onReadNotification,
    onMassiveUpdate,
    dateFormat,
}: AlarmbarType) => {
    /* Atributes */
    const [notificationsNew, setNotificationsNew] = useState<
        NotificationType[]
    >([]);
    const [notificationsRead, setNotificationsRead] = useState<
        NotificationType[]
    >([]);
    const [currentPageNew, setCurrentPageNew] = useState<number>(0);
    const [currentPageRead, setCurrentPageRead] = useState<number>(0);
    const [disableLoadMoreNew, setDisableLoadMoreNew] = useState<boolean>(
        false
    );
    const [disableLoadMoreRead, setDisableLoadMoreRead] = useState<boolean>(
        false
    );
    const [newNumPages, setNewNumpages] = useState<number>(0);
    const [readNumPages, setReadNumpages] = useState<number>(0);
    const [parsedNew, setParsedNew] = useState<boolean>(false);
    const [parsedRead, setParsedRead] = useState<boolean>(false);
    const [showRead, setShowRead] = useState<boolean>(false);
    const [numNotRead, setNumNotRead] = useState<number>(0);
    const [value, setValue] = useState<string>(INIT_OPTION);
    const [options, setOptions] = useState<Array<OptionType>>([]);
    const [item, setItem] = useState<ItemType>({
        id: 0,
        description: "",
        selected: false,
    });

    /* Functions */
    const onUpdateCheckbox = (item: ItemType) => {
        setItem(item);
        if (item?.selected) {
            setShowRead(true);
            onShowRead(true);
            setValue(OPTION_ALL_DAYS);
        } else {
            setShowRead(false);
            onShowRead(false);
            setValue(INIT_OPTION);
        }
        setNewNumpages(0);
        setReadNumpages(0);
        setCurrentPageNew(0);
        setCurrentPageRead(0);
    };

    const onSelectedValue = (option: string) => {
        setValue(option);
        onChangeValue(parseInt(option));
        setNewNumpages(0);
        setReadNumpages(0);
        setCurrentPageNew(0);
        setCurrentPageRead(0);
        setParsedRead(false);
        setNotificationsRead([]);
    };

    const onMarkAll = () => {
        const list = markAllNotifications(notificationsNew);
        const total = notificationsRead.concat(list);
        setNotificationsNew([]);
        setNotificationsRead(total);
        onMassiveUpdate(true);
    };

    const onClickedEye = (id: number, read: boolean) => {
        if (read) {
            const updated = updateAsRead(
                notificationsNew,
                notificationsRead,
                id,
                read
            );
            setNotificationsNew(updated.read);
            setNotificationsRead(updated.notRead);
        } else {
            const updated = updateAsNotRead(
                notificationsNew,
                notificationsRead,
                id,
                read
            );
            setNotificationsNew(updated.read);
            setNotificationsRead(updated.notRead);
        }
        onReadNotification(id, read);
    };

    const updatePageNewNotifications = () => {
        if (!disableLoadMoreNew) {
            const nextPage: number = currentPageNew + 1;
            setCurrentPageNew(nextPage);
            onUpdatePage(nextPage, showRead);
            if (nextPage >= newNumPages - 1) {
                setDisableLoadMoreNew(true);
            }
        }
    };

    const updatePageReadNotifications = () => {
        if (!disableLoadMoreRead) {
            const nextPage: number = currentPageRead + 1;
            setCurrentPageRead(nextPage);
            onUpdatePage(nextPage, showRead);
            if (nextPage >= readNumPages - 1) {
                setDisableLoadMoreRead(true);
            }
        }
    };

    // const onFilter = () => {
    //     console.log("filter!");
    //     console.log("numPages:", numPages);
    // };

    /* useEffects */
    useEffect(() => {
        const totalToRead = newNotifications.total;
        if (totalToRead !== undefined) {
            setNumNotRead(totalToRead);
        }
    }, [newNotifications]);

    useEffect(() => {
        const parsedRead = filterNotifications(
            locale,
            true,
            readNotifications,
            dateFormat
        );
        const copy = notificationsRead.slice();
        const updated = copy.concat(parsedRead);
        const notduplicated = removeDuplicates(updated);
        setNotificationsRead(notduplicated);
        const numpages: number = readNotifications?.numpages
            ? readNotifications?.numpages
            : 0;
        setReadNumpages(numpages);
        if (readNotifications == null) {
            setDisableLoadMoreRead(true);
        } else if (numpages <= MINIM_PAGE) {
            setDisableLoadMoreRead(true);
        } else if (numpages > MINIM_PAGE && numpages > readNumPages) {
            setDisableLoadMoreRead(false);
        }
        setParsedRead(true);
    }, [readNotifications]);

    useEffect(() => {
        const parsedNew = filterNotifications(
            locale,
            false,
            newNotifications,
            dateFormat
        );
        const copy = notificationsNew.slice();
        const updated = copy.concat(parsedNew);
        const notduplicated = removeDuplicates(updated);
        setNotificationsNew(notduplicated);
        const numpages: number = newNotifications?.numpages
            ? newNotifications?.numpages
            : 0;
        setNewNumpages(numpages);
        if (newNotifications == null) {
            setDisableLoadMoreNew(true);
        } else if (numpages <= MINIM_PAGE) {
            setDisableLoadMoreNew(true);
        } else if (numpages > MINIM_PAGE && numpages > newNumPages) {
            setDisableLoadMoreNew(false);
        }
        setParsedNew(true);
    }, [newNotifications]);

    useEffect(() => {
        const langueages = generateOptions(locale);
        setOptions(langueages);
    }, [locale]);

    const classEnabledMarkAll: string =
        notificationsNew.length > 0 ? "--enabled" : "--disabled";
    const classloaded: string =
        show === null
            ? ""
            : show
            ? "alarmbar-sidebar-show"
            : "alarmbar-sidebar-hide";
    return (
        <React.Fragment>
            <div className={`${show ? "alarmbar-darken" : ""}`}></div>
            <div className={`alarmbar-sidebar ${classloaded}`}>
                <div className="alarmbar-sidebar-content">
                    <div className="alarmbar-sidebar-menu">
                        <div className="alarmbar-header">
                            <div className="alarmbar-title alarmbar-no-select">
                                <span>{loadMessages(locale)?.TITLE}</span>
                            </div>
                            <div className="alarmbar-subtitle alarmbar-no-select">
                                {/* <div
                                    className="alarmbar-filter"
                                    onClick={onFilter}
                                >
                                    <FilterIcon />
                                    <span>{loadMessages(locale)?.FILTER}</span>
                                </div> */}
                                <div className="alarmbar-mark">
                                    <span
                                        className={`${classEnabledMarkAll}`}
                                        onClick={onMarkAll}
                                    >{`${loadMessages(locale).SUB_TITLE} ${
                                        numNotRead > 0 ? `(${numNotRead})` : ""
                                    }`}</span>
                                </div>
                            </div>
                        </div>
                        <div className="alarmbar-list-items alarmbar-no-select">
                            <div className="alarmbar-list-scroll custom-scrollbar">
                                {parsedNew &&
                                    parsedRead &&
                                    loadNotifications(
                                        showRead,
                                        notificationsNew,
                                        notificationsRead
                                    ).map(
                                        (
                                            notification: NotificationType,
                                            index: number
                                        ) => {
                                            return (
                                                <Notification
                                                    key={index}
                                                    showRead={showRead}
                                                    notification={notification}
                                                    onCloseEye={onClickedEye}
                                                />
                                            );
                                        }
                                    )}
                                {showRead ? (
                                    <div
                                        className={`load-more-notifications ${
                                            disableLoadMoreRead
                                                ? "--disabled"
                                                : "--enabled"
                                        }`}
                                        onClick={updatePageReadNotifications}
                                    >
                                        {
                                            loadMessages(locale)
                                                ?.SHOW_MORE_NOTIFICATIONS
                                        }
                                    </div>
                                ) : (
                                    <div
                                        className={`load-more-notifications ${
                                            disableLoadMoreNew
                                                ? "--disabled"
                                                : "--enabled"
                                        }`}
                                        onClick={updatePageNewNotifications}
                                    >
                                        {
                                            loadMessages(locale)
                                                ?.SHOW_MORE_NOTIFICATIONS
                                        }
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="alarmbar-submenu">
                            <div className="alarmbar-selector">
                                <Selector
                                    options={options}
                                    value={value}
                                    onChange={onSelectedValue}
                                    disabled={!showRead}
                                />
                                <div className="alarmbar-show-read">
                                    <Checkbox
                                        item={item}
                                        onChangeItem={onUpdateCheckbox}
                                    />
                                    <span className="alarmbar-show-read-checkbox-title alarmbar-no-select">
                                        {loadMessages(locale)?.SHOW_READ}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Alarmbar;

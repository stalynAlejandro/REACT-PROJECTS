`Alarmbar` es un componente compuesto reutilizable, el cual está sub dividido en tres componentes para una mejor legibilidad y entendimiento de su funcionamiento.

Los tres componentes en los que está sub dividido son los siguientes:

-   Checkbox: Se encarga de mostrar las notificaciones leídas.
-   Selector: Se encarga de seleccionar la opción deseada en el select.
-   Notification: El componente Notificacion dónde se mostrará la información, habrán tantos componentes notification como notificaciones.

### Funcionamiento

El componente Alarmbar tiene los siguientes atributos:

-   newNotifications: Array<NotificationType>; La lista de notificaciones no leídas.
-   readNotifications: ReadNotificationType; La lista de notificaciones leídas.
-   show: boolean; El atributo que recibe por redux al clickar sobre el icono para mostrar el panel u ocultarlo.
-   locale: LocaleString; string; Por defecto, el idioma está en inglés. Para modificar dicho idioma se le pasa el idioma mediante este atributo.
-   onUpdatePage: (page: number, read: boolean) => void; Evento que devuelve el número de la página a buscar y el tipo de notificaciones (leídas o no leídas).
-   onChangeValue: (id: string) => void; Evento que devuelve el número de días por las que filtrar las notificaciones no leídas.
-   onReadNotification: (id: number, read: boolean) => void; Evento que devuelve el id de la notificación marcada y su valor de leída.
-   onMassiveUpdate: (ids: number[]) => void; Evento que devuelve todos los ids de las notificaciones no leídas.

NotificationType tiene la siguiente estructura:

-   id: number;
-   title: string;
-   description: string;
-   date: string;
-   icon: any;
-   alarm: boolean;
-   read: boolean;

```json
const Alarmbar = ({
    newNotifications,
    readNotifications,
    show = false,
    locale = "en-GB",
    onUpdatePage,
    onChangeValue,
    onReadNotification,
    onMassiveUpdate,
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
        item?.selected ? setShowRead(true) : setShowRead(false);
        if (!item?.selected) {
            setValue(INIT_OPTION);
        }
    };

    const onSelectedValue = (option: string) => {
        setValue(option);
        onChangeValue(parseInt(option));
        setNewNumpages(0);
        setReadNumpages(0);
        setParsedRead(false);
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
            if (nextPage === newNumPages - 1) {
                setDisableLoadMoreNew(true);
            }
            if (nextPage === readNumPages - 1) {
                setDisableLoadMoreRead(true);
            }
        }
    };

    const updatePageReadNotifications = () => {
        if (!disableLoadMoreNew) {
            const nextPage: number = currentPageRead + 1;
            setCurrentPageRead(nextPage);
            onUpdatePage(nextPage, showRead);
            if (nextPage === readNumPages - 1) {
                setDisableLoadMoreRead(true);
            }
            if (nextPage === newNumPages - 1) {
                setDisableLoadMoreNew(true);
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
        const parsedReadNotifications = filterNotifications(
            locale,
            true,
            readNotifications
        );
        setNotificationsRead(parsedReadNotifications);
        setReadNumpages(readNotifications.numpages);
        if (readNotifications.numpages <= MINIM_PAGE) {
            setDisableLoadMoreRead(true);
        }
        setParsedRead(true);
    }, [readNotifications]);

    useEffect(() => {
        const parsedNewNotifications = filterNotifications(
            locale,
            false,
            newNotifications
        );
        setNotificationsNew(parsedNewNotifications);
        setNewNumpages(newNotifications.numpages);
        if (newNotifications.numpages <= MINIM_PAGE) {
            setDisableLoadMoreNew(true);
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
```

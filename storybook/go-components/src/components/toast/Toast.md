`Toast` es un componente reutilizable sin dependecias a otras librerías.

### Funcionamiento

El componente Toast tiene los siguientes atributos:

-   locale?: string; Por defecto, el idioma está en inglés. Para modificar dicho idioma se le pasa el idioma mediante este atributo.
-   loaderTitle?: string; Título que se mostrará en el tipo de notificación "loader".
-   percentage?: number; Porcentaje de carga del tipo de notificación "loader".
-   toastList: Array<ToastItemType>; Lista de toasts.
-   position?: PositionType; Posición donde se mostrarán los toasts. "top-right" | "top-left" | "bottom-left" | "bottom-right".
-   type?: Type; Tipos de toasts. "normal" | "loader" | "completed" | "simple".
-   autoDelete?: boolean; Si se borra automanticamente o no.
-   dismissTime?: number; Tiempo en el que desaparecerá.
-   onResult: () => void; Llama a la función que se le pase al hacer click sobre una notificación de tipo "completed" o cuando finaliza la carga en una notificación de tipo "loader".
-   onRemoveToast: (id: number) => void; Cuando un toast se elimina de la lista de su interior envía el id de dicho toast por si se quiere hacer algo con él. Por ejemplo, si vamos guardando en redux los toasts que se van mostrando cuando se borren internamente mediante este evento podemos borrarlos de la lista de redux. 

El ToastItemType tiene los siguientes atributos:

-   id: number; Identificador del toast.
-   title: string; Título del toast.
-   description: string; Descripción del toast.
-   type: typeItemType; Los tipos de colores que puede tener un toast. "success" | "danger" | "info" | "warning" | "goaigua";

 TODO:

- CompletedNotification
- LoaderNotification


Ejemplo:

```json
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
        </React.Fragment>
    );
};

export default Toast;
```
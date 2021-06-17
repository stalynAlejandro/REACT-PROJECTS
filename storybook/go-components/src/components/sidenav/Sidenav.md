`Sidenav` es un componente atómico.

### Funcionamiento

`Sidenav` es un componente que recibe los siguientes atributos:

-   selectedDma: string; Dma seleccionado;
-   width: string; Alto del menú que se mostrará tras pulsar sobre el icono de navegacion.
-   height: string; Ancho del menú que se mostrará tras pulsar sobre el icono de navegacion.
-   expanded?: boolean; Si está expandido o no el componente.
-   buttons?: Array<ButtonModelType>; Los botones que se mostrarán en la columna del sidnav.
-   hierarchyMaskEnabled: Function; Función que devuelve si hay algún elemento de la jerarquía seleccionado, para así mostrar o no el contenido de la aplicación.

Sidenav se encarga de dibujar los iconos. Dichos iconos se pasan mediante un array de ButtonModelType.

Ejemplo de ButtonModelType;

-   name: string; Nombre que aparecerá al lado del botón al expandirse.
-   position: string; Posición del botón ("top", "middle", "bottom").
-   Component: React.ReactNode | null;

Ejemplo de botones para smartmetering:

```json
const Sidenav = ({ expanded = false, buttons, defaultButton }: SidenavType) => {
    const [topButton, setTopButton] = useState<ButtonModelType | null>(null);

    const onSelectedTopButton = (button: ButtonModelType) => {
        if (Array.isArray(buttons)) {
            if (topButton?.id === button?.id) {
                setTopButton(null);
            } else {
                const foundedButton: ButtonModelType | undefined = buttons.find(
                    (b: ButtonModelType) => b?.id === button?.id
                );
                if (foundedButton) {
                    setTopButton(foundedButton);
                }
            }
        }
    };
    return (
        <React.Fragment>
            <div
                className={`sidenav__wrapper ${
                    expanded ? "sidenav__wrapper--expanded" : ""
                }`}
            >
                <div className="sidenav__top-menu">
                    <div
                        className={`${
                            buttons && calculateNumTopButtons(buttons) > 0
                                ? "top-buttons"
                                : "no-sidenav-icons"
                        }`}
                    >
                        {buttons &&
                            buttons.map(
                                (button: ButtonModelType, index: number) => {
                                    const TopButton = button.Component;
                                    return button.position !==
                                        ICON_POSITION.TOP ? null : (
                                        <div
                                            className={`sidenav-icon-top ${
                                                button?.id === topButton?.id
                                                    ? "sidenav-icon-top--active"
                                                    : ""
                                            }`}
                                            key={`${button.name}-${index}`}
                                            onClick={() =>
                                                onSelectedTopButton(button)
                                            }
                                        >
                                            {TopButton}
                                        </div>
                                    );
                                }
                            )}
                        <div className="menu-separator"></div>
                    </div>
                    <div className="middle-buttons">
                        {buttons &&
                            buttons.map(
                                (button: ButtonModelType, index: number) => {
                                    const MiddleButton = button.Component;
                                    return button.position !==
                                        ICON_POSITION.MIDDLE ? null : (
                                        <div
                                            className={`sidenav-icon ${
                                                button.id === defaultButton?.id
                                                    ? "sidenav-icon--active"
                                                    : ""
                                            }`}
                                            key={`${button.name}-${index}`}
                                        >
                                            {MiddleButton}
                                            {expanded && (
                                                <span className="sidenav-nameicon">
                                                    {button.name}
                                                </span>
                                            )}
                                        </div>
                                    );
                                }
                            )}
                    </div>
                </div>
                <div className="sidenav__bottom-menu">
                    <div className="bottom-buttons">
                        {buttons &&
                            buttons.map(
                                (button: ButtonModelType, index: number) => {
                                    const BottomButtons = button.Component;
                                    return button.position !==
                                        ICON_POSITION.BOTTOM ? null : (
                                        <div
                                            className={`sidenav-icon ${
                                                button.id === defaultButton?.id
                                                    ? "sidenav-icon--active"
                                                    : ""
                                            }`}
                                            key={`${button.name}-${index}`}
                                        >
                                            {BottomButtons}
                                        </div>
                                    );
                                }
                            )}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Sidenav;
```

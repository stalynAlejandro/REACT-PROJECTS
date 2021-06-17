`Widget` es un componente atómico.

### Funcionamiento

El componente Widget sirve como contenedor para por ejemplo graficas y tiene los siguientes atributos:

-   title: string; Titulo del contenedor
-   children: React.ReactNode; Componente que cargaremos dentro del contenedor
-   expanded: boolean; Estado para expandir o no el widget.
-   hasExpanded: boolean = true; Icono para mostrar el componente expandIcon.
-   hasOptions: boolean = true; Si hay opciones tendremos que pasarle un componente ellipsisMenu que sera donde cargue las opciones
-   ellipsisMenu: React.ReactNode | null; Componente atomico para crear un menu ellipsis con sus submenus
-   expandIcon: React.ReactNode | null;
-   style: React.CSSProperties; Estilos que le pasaremos al componente como por ejemplo el sitio a ocupar en el grid;

Ejemplo:

```json
const Widget = ({
    title,
    children,
    expanded = false,
    showExpanded = false,
    hasOptions = false,
    ellipsisMenu,
    expandIcon,
    style,
}: WidgetType) => {
    return (
        <React.Fragment>
            <div className="widget" style={style}>
                <div className="widget__header">
                    <div
                        className="widget__header-title"
                        data-testid="widget__header__title-test"
                    >
                        {title}
                    </div>
                    <div className="icons">
                        <React.Fragment>
                            {showExpanded && expandIcon}
                            {hasOptions && ellipsisMenu}
                        </React.Fragment>
                    </div>
                </div>
                <div className="widget__content">{children}</div>
            </div>
            {expanded && (
                <div className="widget-popver">
                    <div className="widget-container">
                        <div className="widget-header">
                            {title}

                            <div className="widget-icons">
                                <React.Fragment>
                                    {showExpanded && expandIcon}
                                    {hasOptions && ellipsisMenu}
                                </React.Fragment>
                            </div>
                        </div>
                        <div className="widget-content">{children}</div>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
};

export default Widget;
```

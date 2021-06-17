`SimpleKpi` es un componente atómico.

### Funcionamiento

`SimpleKpi` es un componente que recibe los siguientes atributos:

-   showHeader?: boolean; Muestra la cabecera o no.
-   titleHeader?: string; Muestra o no el título de la cabecera.
-   showIcon?: boolean; Muestra el icono o no.
-   Component?: ReactNode; El componente que se va a dibujar dentro del Kpi, o nada si es null.
-   style?: CSSProperties; Para que el componente sea totalmente atómico se le pasa por este atributo el `gridColumn` y `gridRow`.

Ejemplo de style:

```json
const SimpleKpi = ({
    showHeader = false,
    titleHeader,
    showIcon = false,
    style,
    Component,
}: SimpleKpiType) => {
    return (
        <div className="simple-kpi" style={style}>
            {showHeader && (
                <React.Fragment>
                    <div className="simple-kpi-header">
                        <div className="header-title">{titleHeader}</div>
                        {showIcon && (
                            <div className="header-icons">
                                {<EllipsisIcon />}
                            </div>
                        )}
                    </div>
                    <div className="simple-kpi-container-with-header">
                        {Component}
                    </div>
                </React.Fragment>
            )}
            {!showHeader && (
                <div className="simple-kpi-container">{Component}</div>
            )}
        </div>
    );
};

export default SimpleKpi;
```

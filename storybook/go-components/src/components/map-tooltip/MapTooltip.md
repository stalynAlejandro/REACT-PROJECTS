`MapTooltip` es un componente atómico, con su carpeta de idiomas.

### Funcionamiento

`MapTooltip` es un componente que recibe los siguientes atributos:

-   locale?: string; Por defecto, el idioma está en inglés. Para modificar dicho idioma se le pasa el idioma mediante este atributo.
-   type: SelectedType;
-   show: boolean; Atributo para visualizar o ocultar el componente.
-   total?: string;
-   name?: string; El nombre para mostrar en el tooltip al hacer hover sobre el mapa.
-   percentage?: string;
-   isPerformance?: boolean; Atributo por el que cargará la información para mostrar en el mapa, si es true cargará la información sobre `Rendimiento` y si es false mostrará la información sobre el `Grado de implantación`.
-   posX: number; La posición X dentro del canvas del mapa.
-   posY: number; La posición Y dentro del canvas del mapa.

El tipo SelectedType puede ser de "default" | "monitoring" | "detailview";

Con todos los atributos anteriores lo único que hace es motrar en el mapa un tooltip con la siguiente estructura:

Tooltip por defecto:

-   Nombre: Nombre del elemento sobre el que estamos al hacer hover
-   Rendimiento / Grado de implantación: Porcentaje en tanto por cien.

Tooltip de tipo Monitoring:

-   Porcentaje: Grado de implantación
-   Total: Total de módulos

Tooltip de tipo DetailView:

-   cod_ps: string; Código punto de suministro.
-   codigo: string; Código.
-   direccion: string; Dirección.
-   fecha: string; Fecha
-   fecha_mod: string; Fecha de modificación.
-   numero_ser: string; Número de serie.
-   comunica: string; Si comunica.

Ejemplo:

```json
const MapTooltip = ({
    locale = "en-GB",
    type = "default",
    name = "",
    percentage = "",
    isPerformance = true,
    total = "",
    detailViewData = null,
    posX,
    posY,
    show = false,
}: MapTooltipType) => {
    return (
        <React.Fragment>
            {type === TOOLTIP_TYPE.DEFAULT && (
                <DefaultTooltip
                    locale={locale}
                    show={show}
                    name={name}
                    posX={posX}
                    posY={posY}
                    percentage={percentage}
                    isPerformance={isPerformance}
                />
            )}
            {type === TOOLTIP_TYPE.MONITORING && (
                <MonitoringTooltip
                    locale={locale}
                    show={show}
                    posX={posX}
                    posY={posY}
                    percentage={percentage}
                    total={total}
                />
            )}
            {type === TOOLTIP_TYPE.DETAILVIEW && (
                <DetailViewTooltip
                    locale={locale}
                    data={detailViewData}
                    posX={posX}
                    posY={posY}
                    show={show}
                />
            )}
        </React.Fragment>
    );
};

export default MapTooltip;
```
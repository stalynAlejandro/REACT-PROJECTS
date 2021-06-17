`MapLegend` es un componente reutilizable sin dependecias a otras librerías.

### Funcionamiento

El componente MapLegend tiene los siguientes atributos:

-   title?: string; Titulo del elemento.
-   items?: Array<LegendItemType>; Elementos para mostrar en la leyenda.
-   header: boolean; Si se muestra la cabecera o no.

Ejemplo:

```json
const MapLegend = ({
    title = "",
    items = [],
    header = true,
}: MapLegendPropsType) => {
    return (
        <div className="map-legend">
            <Legend title={title} items={items} header={header} />
        </div>
    );
};

export default MapLegend;
```

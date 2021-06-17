`MapSelector` es un componente atómico.

### Funcionamiento

`MapSelector` es un componente que recibe los siguientes atributos:

-   itemBtns: Array<SelectorButtonType>; Array de botones que se mostrarán sobre el mapa.
-   onClikedItem: (newButtons: Array<SelectorButtonType>, id: number) Evento que tras pulsar sobre el botón realizará devolverá los botones actualizados y el id del seleccionado.

Ejemplo de `SelectorButtonType`: 

-   id: number; Identificador del objeto.
-   title: string; Título del botón.
-   active: boolean; Si está activo o no. Solo puede haber un botón activo entre todos los objetos.
-   performance: boolean; Si es Rendimiento o no.

Ejemplo de `itemBtns`:

```json
const [itemBtns, setItemBtns] = useState<Array<SelectorButtonType>>([
    {
        id: 0,
        title: loadMessages(locale).PERFORMANCE_TITLE,
        active: true,
        performance: true,
    },
    {
        id: 1,
        title: loadMessages(locale).COVERAGE_TITLE,
        active: false,
        performance: false,
    },
]);
```

Ejemplo de `MapSelector`:

```json
const MapSelector = ({ itemBtns, onClikedItem }: MapSelectorType) => {
    const onClickButton = (id: number) => {
        let newButtons: Array<SelectorButtonType> = itemBtns.map(
            (b: SelectorButtonType) =>
                b.id === id
                    ? Object.assign({}, b, { active: true })
                    : Object.assign({}, b, { active: false })
        );
        newButtons.sort((a, b) => a.id - b.id);
        onClikedItem(newButtons, id);
    };

    return (
        <div className="mapselector-centered">
            <div
                className={
                    "c-btn-group c-btn-group--outline c-btn-group--dark-solid c-btn-group--lg"
                }
            >
                {itemBtns.map((dataItem: SelectorButtonType, index: number) => (
                    <button
                        key={index}
                        type="button"
                        className={`${dataItem.active ? "is-active" : ""}`}
                        onClick={() => onClickButton(dataItem.id)}
                    >
                        {dataItem.title}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MapSelector;
```
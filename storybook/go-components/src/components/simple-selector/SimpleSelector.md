`SimpleSelector` es un componente atómico.

### Funcionamiento

El componente SimpleSelector tiene los atributos:

-   firstItem: SelectorItemType; El primer elemento a poder seleccionar.
-   secondItem: SelectorItemType; El segundo elemento a poder seleccionar.
-   onSelectedItem: (item: SelectorItemType) => void; Devuelve el elemento seleccionado.

SelectorItemType tiene la siguiente estructura:

-   id: number; Identificador del elemento.
-   title: string; Título del elemento.

Ejemplo:

```json
const SimpleSelector = ({
    firstItem,
    secondItem,
    onSelectedItem,
}: SimpleSelectorType) => {
    const [itemSelected, setItemSelected] = useState<SelectorItemType>(
        firstItem
    );

    const updateFirstItem = () => {
        setItemSelected(firstItem);
        onSelectedItem(firstItem);
    };

    const updateSecondItem = () => {
        setItemSelected(secondItem);
        onSelectedItem(secondItem);
    };

    return (
        <div className="simple-selector">
            <div
                className={`simple-selector-item ${
                    itemSelected.id === firstItem.id ? "--selected" : ""
                }`}
                onClick={updateFirstItem}
            >
                <span>{firstItem.title}</span>
            </div>
            <div
                className={`simple-selector-item ${
                    itemSelected.id === secondItem.id ? "--selected" : ""
                }`}
                onClick={updateSecondItem}
            >
                <span>{secondItem.title}</span>
            </div>
        </div>
    );
};

export default SimpleSelector;
```

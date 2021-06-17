`MultiSelect` es un componente atómico, el cual está sub dividido en cuatro componentes para una mejor legibilidad y entendimiento de su funcionamiento.

Los cuatro componentes en los que está sub dividido son los siguientes:

-   SearchDropDown: Buscador de elementos.
-   ListDropDown: Se encarga de listar los elementos.
-   BottomDropDown: Los botones inferiores para seleccionar todos o no.
-   TagItems: El que se encarga de mostrar en el label los seleccionados (hasta un máximo de tres).

### Funcionamiento

El componente MultiSelect tiene los siguientes atributos:

-   items: Array<ItemType>; Array de items que se le pasa al componente.
-   selected: boolean; Si todos los items están inicialmente seleccionados o no.
-   search: boolean; Si se muestra el buscador o no. Por defecto, no se muestra el buscador.
-   locale?: string; Por defecto, el idioma está en inglés. Para modificar dicho idioma se le pasa el idioma mediante este atributo.
-   label?: string; para tener un título encima del selector en caso de ser preciso
-   disabled: boolean; si se encuentra a true, no podrá desplegarse el selector
-   error: boolean; si se encuentra a true, pondrá un borde rojo al selector.
-   errorMessage: string; mensaje de error.
-   onChangeItems: (items: Array<ItemType>) => void; Devuelve el estado interno de los items al modificarse en su interior.
-   size?: string: Tamaño del componente.
-   type?: MultiselectCheckboxType; Tipo de Multiselect.
-   nodes?: any;
-   nodesCheckedByDefault?: Array<string>;
-   nodesExpandedByDefault?: Array<string>;
-   alternative?: boolean;

ItemType tiene la siguiente estructura:

-   id: number;
-   description: string;
-   selected: boolean;

Puede pasarle más atributos, pero recuerde que esos son obligatorios.

```json
const MultiSelect = ({
    items,
    selected = false,
    search = false,
    locale = "en-GB",
    disabled,
    onChangeItems,
}: MultiSelectType) => {
    const [enabled, setEnabled] = useState<boolean>(false);
    const [all, setAll] = useState<boolean>(false);
    const [clear, setClear] = useState<boolean>(false);
    const [initialItems, setInitialItems] = useState<Array<ItemType>>([]);
    const [filterText, setFilterText] = useState<string>("");

    useEffect(() => {
        const initializedItems: Array<ItemType> = initializeItems(
            items,
            selected
        );
        setInitialItems(initializedItems);
    }, []);

    const removeTag = (item: ItemType) => {
        const updatedInitialItems: Array<ItemType> = updateArray(
            item,
            initialItems
        );
        setInitialItems(updatedInitialItems);
        onChangeItems(updatedInitialItems);
    };

    const updateEnabled = (): void => {
        const status = !enabled;
        setEnabled(status);
    };

    const updateItems = (itemSelected: ItemType) => {
        const updatedItems: Array<ItemType> = replaceItemInArray(
            itemSelected,
            initialItems
        );
        setInitialItems(updatedItems);
        onChangeItems(updatedItems);
    };

    const updateSearchItems = (filterText: string) => {
        setFilterText(filterText);
    };

    const selectAllItems = () => {
        const updatedItems: Array<ItemType> = selectAll(initialItems, true);
        setInitialItems(updatedItems);
        onChangeItems(updatedItems);
        setAll(true);
    };

    const clearItems = () => {
        const updatedItems: Array<ItemType> = selectAll(initialItems, false);
        setInitialItems(updatedItems);
        onChangeItems(updatedItems);
        setClear(true);
    };

    const updateCleared = (): void => {
        setClear(false);
    };

    const updateAll = (): void => {
        setAll(false);
    };

    return (
        <div className="multiselect">
            <TagItems
                locale={locale}
                clear={clear}
                all={all}
                enabled={enabled}
                items={initialItems}
                onRemove={removeTag}
                onCleared={updateCleared}
                onAll={updateAll}
                onUpdateEnabled={updateEnabled}
            />
            {enabled && (
                <div className="multiselect-dropdown">
                    {search && (
                        <SearchDropDown
                            locale={locale}
                            clearSerchText={clear}
                            onCleared={updateCleared}
                            onUpdateItems={updateSearchItems}
                        />
                    )}
                    <ListDropdown
                        items={initialItems}
                        filterText={filterText}
                        onUpdate={updateItems}
                    />
                    <div className="multiselect-separator-line"></div>
                    <BottomDropdownType
                        locale={locale}
                        onSelectAll={selectAllItems}
                        onClear={clearItems}
                    />
                </div>
            )}
        </div>
    );
};

export default MultiSelect;
```

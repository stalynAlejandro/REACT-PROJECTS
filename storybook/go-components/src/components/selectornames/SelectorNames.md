`SelectorNames` es un componente atómico.

### Funcionamiento

El componente Selector tiene los atributos:

-   items: Array<ItemType>; Lista de elementos
-   search: boolean;
-   locale: string; Por defecto, el idioma está en inglés. Para modificar dicho idioma se le pasa el idioma mediante este atributo.
-   onChangeItems: (items: ItemType) => void; Devuelve el elemento seleccionado del listado de items

Ejemplo:

```json
const Selector = ({
    items,
    search = false,
    locale = "en-GB",
    label,
    onChangeItems,
}: SelectorComponentType) => {
    const refSelector: any = useRef();
    const notSelected = {
        id: 0,
        description: loadMessages(locale).SELECT,
        selected: false,
    };
    const [enabled, setEnabled] = useState<boolean>(false);
    const [initialItems, setInitialItems] = useState<Array<ItemType>>([]);
    const [selectedItem, setSelectedItem] = useState<ItemType>(notSelected);
    const [isItemSelected, setIsItemSelected] = useState<boolean>(false);
    const [filterText, setFilterText] = useState<string>("");
    const [clear, setClear] = useState<boolean>(false);

    const handleClickOutSide = (event: any) => {
        if (
            refSelector.current &&
            !refSelector.current.contains(event.target)
        ) {
            setEnabled(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutSide);
        return () =>
            document.removeEventListener("mousedown", handleClickOutSide);
    });

    useEffect(() => {
        setInitialItems(items);
        const itemSelected: ItemType | undefined = items.find(
            (item: ItemType) => item.selected
        );
        if (itemSelected) {
            setSelectedItem(itemSelected);
            setIsItemSelected(true);
        } else {
            setSelectedItem(notSelected);
            setIsItemSelected(false);
        }
        if (isEmpty(items)) {
            setEnabled(false);
        }
    }, [items]);

    const updateEnabled = (): void => {
        if (isEmpty(items)) return;
        const status = !enabled;
        setEnabled(status);
        setFilterText("");
    };

    const updateSearchItems = (filterText: string) => {
        setFilterText(filterText);
    };

    const updateCleared = (): void => {
        setClear(false);
    };

    const selectItem = (item: ItemType) => {
        setSelectedItem(item);
        setIsItemSelected(true);
        onChangeItems(item);
        setEnabled(!enabled);
    };

    return (
        <div className="select-names select-names-no-select" ref={refSelector}>
            {label && <div className="select-label">{label}</div>}
            <SelectedItem
                locale={locale}
                enabled={enabled}
                item={isItemSelected ? selectedItem : notSelected}
                onUpdateEnabled={updateEnabled}
            />
            {enabled && (
                <div
                    className={`select-dropdown ${
                        !search ? "select-dropdown--no-search" : ""
                    }`}
                >
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
                        itemSelected={selectedItem}
                        onUpdate={(item: ItemType) => selectItem(item)}
                    />
                </div>
            )}
        </div>
    );
};

export default Selector;
```

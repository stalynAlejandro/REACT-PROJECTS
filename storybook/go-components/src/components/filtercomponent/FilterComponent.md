`FilterComponent` es un componente atómico.

### Funcionamiento

El componente FilterComponent tiene los atributos:

-   firstSelected: boolean; Si deseamos que se muestre primero la primera categoría o la segunda.
-   firstCategory: string; Texto de la primera categoría.
-   secondCategory: string; Texto de la segunda categoría.
-   onChangeCategory: (category: string) => void; Devuelve la categoría seleccionada al cambiar su estado al hacer click.

Ejemplo:

```json
const FilterComponent = ({
    firstSelected = true,
    firstCategory = "",
    secondCategory = "",
    onChangeCategory,
}: FilterComponentType) => {
    const [option, setOption] = useState<boolean>(firstSelected);

    const updateOption = () => {
        const status = !option;
        setOption(status);
        status
            ? onChangeCategory(firstCategory)
            : onChangeCategory(secondCategory);
    };

    return (
        <div className="filter-component" onClick={updateOption}>
            <div className="filter-component-text filter-component-no-select">
                {option ? firstCategory : secondCategory}
            </div>
            <div className="filter-component-icon">
                <ExchangeIcon />
            </div>
        </div>
    );
};

export default FilterComponent;
```

`MoreFilters` es un componente atómico con su carpeta languages.

### Funcionamiento

El componente MoreFilters tiene los atributos:

-   locale?: string; Por defecto, el idioma está en inglés. Para modificar dicho idioma se le pasa el idioma mediante este atributo.
-   children?: React.ReactNode; Los componentes que se van a renderizar dentro de MoreFilters.

Ejemplo:

```json
const MoreFilters = ({ locale = "en-GB", children }: MoreFiltersTypes) => {
    const [showChildren, setShowChildren] = useState<boolean>(false);

    const updateStatus = () => {
        const status = !showChildren;
        setShowChildren(status);
    };

    return (
        <div className="more-filters">
            <div
                className="more-filters-component more-filters-no-select"
                onClick={updateStatus}
            >
                <div className="more-filter-text">
                    {loadMessages(locale)?.MORE_FILTERS}
                </div>
                <div className="more-filter-icon">
                    {showChildren ? <AngleUpIcon /> : <AngleDownIcon />}
                </div>
            </div>
            {showChildren && (
                <div className="more-filters-children more-filters-no-select">
                    {children}
                </div>
            )}
        </div>
    );
};

export default MoreFilters;
```

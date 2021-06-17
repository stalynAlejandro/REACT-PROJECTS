`SearchComponent` es un componente atómico.

### Funcionamiento

El componente SearchComponent tiene los atributos:

-   locale?: string; Por defecto, el idioma está en inglés. Para modificar dicho idioma se le pasa el idioma mediante este atributo.
-   onChangeText: () => void; Devuelve el texto escrito en el input para poder trabajar con el para filtrar o lo que se desee.

Ejemplo:

```json
const SearchComponent = ({
    locale = "en-GB",
    onChangeText,
}: SearchComponentType) => {
    const [value, setValue] = useState<string>("");

    const onUpdateText = (event: React.ChangeEvent<HTMLInputElement>) => {
        const text: string = event.target.value;
        setValue(text);
        onChangeText(text);
    };

    return (
        <div className="search-component">
            <input
                type="text"
                className="search-input"
                placeholder={loadMessages(locale).PLACEHOLDER}
                value={value}
                onChange={onUpdateText}
            />
            <div className="search-component-icon">
                <SearchIcon />
            </div>
        </div>
    );
};

export default SearchComponent;
```

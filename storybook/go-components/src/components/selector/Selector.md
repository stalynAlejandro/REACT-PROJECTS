`Selector` es un componente atómico. (falta añadir el icono como un asset)

### Funcionamiento

`Selector` es un componente que recibe los siguientes atributos:

-   options: Array<OptionType>; Array de opciones de tipo OptionType.
-   selectName: string; Nombre que ocupara en los campos htmlFor y aria-label en el label, y name e id en los campos del select.
-   value: string; Valor que se muestra por defecto.
-   disabled?: boolean; Si está deshabilitado el componente. Este campo es opcional.
-   onChange: Function; Evento que se lanza al cambiar el valor.

`OptionType` tiene los siguientes atributos:

name: string; El nombre de la opción.
value: string; El valor de dicha opción.

Ejemplo:

```json
const languages = [
    { name: "Español", value: "es" },
    { name: "Inglés", value: "en" },
];
```

Ejemplo de `Selector`:

```json
const Selector = ({
    options,
    selectName,
    value,
    onChange,
    disabled = false,
}: SelectorType) => {
    return (
        <div className="selector selector__wrapper">
            <label htmlFor={selectName} aria-label={selectName}>
                <select
                    id={selectName}
                    data-testid="selector-test"
                    name={selectName}
                    value={value}
                    disabled={disabled}
                    onChange={(e) => onChange(e.target.value)}
                >
                    {options.map((option, index) => (
                        <option
                            value={option.value}
                            key={index}
                            data-testid="option-test"
                            label={option.name}
                        >
                            {option.name}
                        </option>
                    ))}
                </select>
            </label>
            <span
                className="select-arrow-user-settings language"
                style={{ pointerEvents: "none" }}
            >
                <ChevronDownIconLight className="chevrondown-icon" />
            </span>
        </div>
    );
};

export default Selector;
```

`Checkbox` es un componente atómico.

### Funcionamiento

El componente Checkbox tiene los siguientes atributos:

-   checked?: boolean; Si está seleccionado inicialmente.
-   label?: string; El texto del checkbox.
-   semiChecked?: boolean; Si está seleccionado pero alguno de sus hijos no por defecto.
-   size?: "small" | "normal" | "large"; Tamaño del checkbox.
-   disabled?: boolean; Si está habilitado o no.
-   onClick?: (e: React.MouseEvent<HTMLInputElement>) => void; Evento al clickar sobre el checkbox.
-   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; Evento que devuelve al cambiar el elemento.

Ejemplo:

```json
const Checkbox = ({
    label,
    size = "normal",
    semiChecked = false,
    disabled,
    checked,
    onClick,
    onChange,
}: CheckboxProps) => {
    const [selfChecked, setSelfChecked] = React.useState(false);

    const checkboxClassNames = `checkbox__main-container ${
        size === "small" ? "--small" : ""
    } ${size === "normal" ? "--normal" : ""} ${
        size === "large" ? "--large" : ""
    }`;

    const checkmarcClassNames = `checkbox__checkmark ${
        semiChecked ? "--semi-checked" : ""
    } ${size === "small" ? "--small" : ""} ${
        size === "normal" ? "--normal" : ""
    } ${size === "large" ? "--large" : ""}`;

    return (
        <label className={checkboxClassNames}>
            {label}
            <input
                onClick={(e) => {
                    onClick && onClick(e);
                    setSelfChecked(!selfChecked);
                }}
                onChange={(e) => {
                    onChange && onChange(e);
                }}
                type="checkbox"
                checked={checked == null ? selfChecked : checked}
                disabled={disabled}
            />
            <span className={checkmarcClassNames}></span>
        </label>
    );
};

export default Checkbox;
```

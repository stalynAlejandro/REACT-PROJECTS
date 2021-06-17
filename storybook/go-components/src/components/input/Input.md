`Input` es un componente reutilizable sin dependecias a otras librerías.

### Funcionamiento

El componente Input tiene los siguientes atributos:

-   name?: string; Nombre del input.
-   type?: "text" | "number" | "password" | "color"; Tipo de input.
-   value: string; Valor del input.
-   placeholder?: string; Placeholder que contendrá el input.
-   label?: string; Label del input.
-   size?: "l" | "m" | "s"; Tamaño del input.
-   onChangeInput: (text: string) => void; Evento que devuelve la cadena de texto en el input.

Input genérico.

Ejemplo:

```json
const Input = ({
    name,
    type = "text",
    value,
    onChangeInput,
    placeholder,
    label,
    size = "m",
}: inputPropsType) => {
    return (
        <div className={`custom-input__main-container ${size}`}>
            {label && <label className="custom-input__label">{label}</label>}
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                className={`custom-input__main-input ${size}`}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    onChangeInput(event.target.value)
                }
                value={value}
            />
        </div>
    );
};

export default Input;
};
```

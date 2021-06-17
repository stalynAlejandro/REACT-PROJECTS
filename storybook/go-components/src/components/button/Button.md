`Button` es un componente atómico.

### Funcionamiento

El componente Button tiene los siguientes atributos:

-   textButton: string; Nombre del botón.
-   color: string; Color del botón ( "blue", "gray", "transparent", "transparent-outlined")
-   onClickedButton: Function; Evento que llama a la función que se le pasa.
-   css: string; clases externas de css que se le aplican al botón.
-   disabled: boolean; Si está activo o no.
-   iconButton?: React.ReactNode; El icono del botón.

Ejemplo:

```json
const Button = ({
    textButton,
    color,
    onClickedButton,
    css,
    disabled = false,
    iconButton = null
}: ButtonType) => {
    return (
        <button
            type="button"
            className={`go-button go-button__${color} ${css ? css : ""}`}
            onClick={() => onClickedButton()}
            disabled={disabled}
        >
            {iconButton}
        {textButton}
        </button>
    );
};

export default Button;
```

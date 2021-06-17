`Switcher` es un componente atómico.

### Funcionamiento

`Switcher` es un componente que recibe los siguientes atributos:

-   checked: boolean; Atributo booleano que se le pasa para saber si está seleccionado o no.
-   onChange: React.ChangeEventHandler<HTMLInputElement>; Evento que al cambiar devulve la función que se pase en onChenge.
-   switcherName: string; Nombre que tendran los campos arial-label, htmlFor e id:

Ejemplo de switcher:

```json
const Switcher = ({ onChange, checked, switcherName }: SwitcherType) => {
    return (
        <div className="switcher switcher__wrapper">
            <label
                aria-label={switcherName}
                className="switcher__switch"
                htmlFor={switcherName}
            >
                <input
                    type="checkbox"
                    id={switcherName}
                    onChange={onChange}
                    checked={checked}
                    data-testid="switcher__input__checkbox-test"
                />
                <div className="switcher__slider switcher__round"></div>
            </label>
        </div>
    );
};

export default Switcher;
```

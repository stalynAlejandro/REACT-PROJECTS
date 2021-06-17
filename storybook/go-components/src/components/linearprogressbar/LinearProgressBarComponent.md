`LinearProgressBar` es un componente atómico.

### Funcionamiento

El componente LinearProgressBar tiene los atributos:

-   filledPercentage: number; El porcentaje de llenado de la barra.
-   height: number; El grosor de la barra.
-   color: string; La descripción del dropdown.

Ejemplo:

```json
const LinearProgressBar = ({
    percentValue = 10,
    height = 30,
    color = "",
}: ProgressBarType) => {

    return (
       <div className="progressbar" style={{ height: `${height}px` }}>
            <div
                className={`progressbar__filled ${color}`}
                style={{ width: `${filledPercentage}`, height: `${height}px` }}
            ></div>
        </div>
    );
};

export default LinearProgressBar;
```

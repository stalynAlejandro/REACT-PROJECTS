`LinearIcon` es un componente atómico.

### Funcionamiento

El componente LinearIcon no tiene los atributos. Simplemente es un icono sobre otro para hacer el efecto solicitado ( un degradado de cuadritos de color azul).

Ejemplo:

```json
const LinearIcon = () => {
    return (
        <div className="linear-icon-body">
            <div className="icon-menu icon-gradient">
                <MenuIconSolid />
            </div>
            <svg
                style={{ width: 0, height: 0, position: "absolute" }}
                aria-hidden="true"
                focusable="false"
            >
                <linearGradient
                    id="my-cool-gradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                >
                    <stop offset="0%" stopColor="#319acb" />
                    <stop offset="100%" stopColor="#b8dcec" />
                </linearGradient>
            </svg>
        </div>
    );
};

export default LinearIcon;
```

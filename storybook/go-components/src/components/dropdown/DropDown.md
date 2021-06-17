`DropDown` es un componente atómico.

### Funcionamiento

El componente DropDown tiene los atributos:

-   title: string; El título del dropdown.
-   icon?: React.ReactNode | null; El icono que habrá entre el título y la descripción.
-   description?: string; La descripción del dropdown.
-   children?: React.ReactNode; Los componentes que se renderizarán dentro del propio componente.

Ejemplo:

```json
const DropDown = ({
    title = "",
    icon = null,
    description = "",
    children,
}: DropDownType) => {
    const [active, setActive] = useState<boolean>(false);

    const updateStatus = () => {
        const status = !active;
        setActive(status);
    };

    return (
        <React.Fragment>
            <div className="drop-down-component">
                <div className="drop-down-content drop-down-no-select">
                    <div className="drop-down-icon" onClick={updateStatus}>
                        {active ? <AngleUpIcon /> : <AngleDownIcon />}
                    </div>
                    <div className="drop-down-title">{title}</div>
                    <div className="drop-down-info">
                        <div className="drop-down-info-icon">{icon}</div>
                        <div className="drop-down-info-description">
                            {description}
                        </div>
                    </div>
                </div>
            </div>
            {active && <div className="drop-down-container">{children}</div>}
        </React.Fragment>
    );
};

export default DropDown;
```

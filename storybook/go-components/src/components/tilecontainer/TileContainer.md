`TileContainer` es un componente atómico.

### Funcionamiento

El componente TileContainer tiene los atributos:

-   title: string; El título que aparecerá en el header del componente
-   showIcon: boolean; Si se muestra el icono o no.
-   onClickedIcon: () => void;
-   children?: React.ReactNode; Los componentes que se renderizarán en el interior del componente TileContainer.


Ejemplo:

```json
const TileContainer = ({
    title = "",
    showIcon = false,
    children = null,
    onClickedIcon,
}: TileContainerType) => {
    return (
        <div className="tile-container">
            <div className="tile-container-header">
                <div className="tile-container-header-title tile-no-select">
                    {title}
                </div>
                <div
                    className="tile-container-header-icon"
                    onClick={onClickedIcon}
                >
                    {showIcon && <SettingsIcon />}
                </div>
            </div>
            <div className="tile-container-content">{children}</div>
        </div>
    );
};

export default TileContainer;
```

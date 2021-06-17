`DetailViewPopover` es un componente reutilizable sin dependecias a otras librerías.

### Funcionamiento

El componente DetailViewPopover tiene los siguientes atributos:

-   locale?: string; Por defecto, el idioma está en inglés. Para modificar dicho idioma se le pasa el idioma mediante este atributo.
-   headerComponent?: React.ReactChild | null; El componente que se mostrará en la cabecera.
-   children?: React.ReactChild; Los componentes que se renderizarán en el cuerpo del componente.
-   onClose: () => void; El evento que se realizará al pulsar sobre el icono de cerrar.

DetailViewPopover es un componente modal para usar cuando queremos ver el detalle de un elemento de una tabla.

Ejemplo:

```json
const DetailViewPopover = ({
    headerComponent = null,
    children,
    onClose,
}: DetailViewPopoverType) => {
    return (
        <div className="detailview-popover">
            <div className="detail-view-background">
                <div className="detailview">
                    <div className="detailview-header">
                        <div className="detail-info">{headerComponent}</div>
                        <div className="detail-icon" onClick={onClose}>
                            <CloseIcon />
                        </div>
                    </div>
                    <div className="detailview-container">{children}</div>
                </div>
            </div>
        </div>
    );
};

export default DetailViewPopover;
};
```

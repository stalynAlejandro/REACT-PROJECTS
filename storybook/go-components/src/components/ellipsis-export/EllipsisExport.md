`EllipsisExport` es un componente atómico.

### Funcionamiento

El componente EllipsisExport tiene los siguientes atributos:

-   xlxs: boolean;
-   png: boolean;
-   pdf: boolean;
-   onExport: (option: optionsInterface) => void;

Basicamente `EllipsisExport` se encarga de mostrar las opciones disponibles por las que exportar la información, en formato excel, imagen o pdf.

La función onExport devuelve la opción seleccionada al clickar.

Ejemplo:

```json
const EllipsisExport = ({
    xlxs = false,
    png = false,
    pdf = false,
    onExport,
}: EllipsisExportType) => {
    return (
        <div className="ellipsis-export">
            {xlxs && (
                <div
                    className="ellipsis-option"
                    onClick={() => onExport("XLXS")}
                >
                    <div className="ellipsis-option-content">
                        <InboxInIcon />
                        <span>XLXS</span>
                    </div>
                </div>
            )}
            {png && (
                <div
                    className="ellipsis-option"
                    onClick={() => onExport("PNG")}
                >
                    <div className="ellipsis-option-content">
                        <InboxInIcon />
                        <span>PNG</span>
                    </div>
                </div>
            )}
            {pdf && (
                <div
                    className="ellipsis-option"
                    onClick={() => onExport("PDF")}
                >
                    <div className="ellipsis-option-content">
                        <InboxInIcon />
                        <span>PDF</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EllipsisExport;
```

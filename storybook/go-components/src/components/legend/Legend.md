`Legend` es un componente reutilizable sin dependecias a otras librerías.

### Funcionamiento

El componente Legend tiene los siguientes atributos:

-   title?: string; Titulo del elemento.
-   items?: Array<LegendItemType>; Elementos para mostrar en la leyenda.
-   header: boolean; Si se muestra la cabecera o no.

LegendItemType tiene los siguientes atributos:

-   id?: number; Identificador del elemento.
-   text: string; Texto del elemento.
-   color: string; Color del elemento.

Ejemplo:

```json
const Legend = ({
    title = "Legend",
    items = [
        { text: "< 50%", color: "#E37272" },
        { text: "50% - 90%", color: "#E9C417" },
        { text: "> 90%", color: "#92C089" },
    ],
    header = true,
}: LegendPropsType) => {
    const [visible, setVisible] = useState<boolean>(true);
    return (
        <div className={"legend__container" + (visible ? "" : " hidden")}>
            {header && (
                <div className="title">
                    <div className="text">{visible && title}</div>
                    <div className="icon" onClick={() => setVisible(!visible)}>
                        {visible ? <RightIcon /> : <LeftIcon />}
                    </div>
                </div>
            )}
            {visible &&
                items.map((item: LegendItemType, index: number) => (
                    <div className="item" key={`${item.text}-${index}`}>
                        <div className="index">{index}</div>
                        <div className="text">{item.text}</div>
                        <div
                            className="color"
                            style={{ background: item.color }}
                        ></div>
                    </div>
                ))}
        </div>
    );
};

export default Legend;
```

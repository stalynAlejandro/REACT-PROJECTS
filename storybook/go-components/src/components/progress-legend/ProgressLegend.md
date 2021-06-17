`ProgressLegend` es un componente compuesto reutilizable.

### Funcionamiento

El componente ProgressLegend tiene los siguientes atributos:


-   locale: LocaleString; string; Por defecto, el idioma está en inglés. Para modificar dicho idioma se le pasa el idioma mediante este atributo.
-   rangeColors: RangeType[]; Lista de colores y valores que se mostrarán de forma lineal.

RangeType tiene la siguiente estructura:

-   color: string; El color en formato hexadecimal.
-   value: number; El valor del rango para ese color

```json
const ProgressLegend = ({
    locale = "en-GB",
    rangeColors,
}: ProgressLegendType) => {
    return (
        <div className="progress-legend">
            <div className="progress-legend-container">
                <div className="progress-title">
                    <span>{loadMessages(locale).TITLE}</span>
                </div>
                <div className="progress-colors">
                    {Array.isArray(rangeColors) &&
                        rangeColors.map((range: RangeType, index: number) => {
                            const last: boolean =
                                index === rangeColors.length - 1 ? true : false;
                            return (
                                <div
                                    key={`${index}-${range.value}`}
                                    style={{ backgroundColor: range.color }}
                                    className={`${
                                        last ? "color-bar-last" : "color-bar"
                                    }`}
                                >
                                    <span>{range.value}</span>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default ProgressLegend;
```

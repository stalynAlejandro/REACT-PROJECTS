`CircularProgressbar` es un componente reutilizable.

### Funcionamiento

El componente CircularProgressbar tiene los siguientes atributos:

-   locale?: string; Por defecto, el idioma está en inglés. Para modificar dicho idioma se le pasa el idioma mediante este atributo.
-   value?: number; Valor numérico.
-   percentValue: number; Porcentaje numérico.

Ejemplo:

```json
const CircularProgressbar = ({
    locale = "en-GB",
    value,
    percentValue,
}: circularProgressbarPropsType) => {
    const [circleDrawProps, setCircleDrawProps] = useState<circleDrawPropsType>(
        getCircleDrawPropsHelper(window?.innerWidth)
    );

    useEffect(() => {
        let timeoutId: null | ReturnType<typeof setTimeout> = null;
        const resizeListener = () => {
            if (timeoutId) clearTimeout(timeoutId);

            timeoutId = setTimeout(() => {
                setCircleDrawProps(
                    getCircleDrawPropsHelper(window?.innerWidth)
                );
            }, 1000);
        };

        window.addEventListener("resize", resizeListener);

        return () => {
            window.removeEventListener("resize", resizeListener);
        };
    }, []);

    return (
        <div className="circular-progressbar__main-container">
            <div className="circular-progressbar__percent">
                <svg>
                    <circle
                        cx={circleDrawProps.radius}
                        cy={circleDrawProps.radius}
                        r={circleDrawProps.radius}
                        style={{
                            transform: circleDrawProps.coords,
                        }}
                    />
                    <circle
                        cx={circleDrawProps.radius}
                        cy={circleDrawProps.radius}
                        r={circleDrawProps.radius}
                        style={{
                            strokeDashoffset: circleDrawProps.dataOffset(
                                percentValue
                            ),
                            transform: circleDrawProps.coords,
                        }}
                    />
                </svg>
                <div className="circular-progressbar__number-group">
                    <div className="circular-progressbar__numberic-value">
                        {percentValue}%
                    </div>
                    {value && (
                        <div className="circular-progressbar__percentage-value">
                            {value.toLocaleString(locale)}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CircularProgressbar;
```

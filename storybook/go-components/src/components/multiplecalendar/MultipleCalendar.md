`MultipleCalendar` es un componente atómico el cual puede mostrar dos tipos de calendarios.

### Funcionamiento

El componente MultipleCalendar tiene los atributos:

-   locale?: string; Por defecto, el idioma está en inglés. Para modificar dicho idioma se le pasa el idioma mediante este atributo.
-   selectRange: boolean; Si se puede seleccionar un rango de fechas en el calendario o solo una única fecha.
-   rangeDate?: RangeDate; Rango de fechas que se mostrarán inicializadas por defecto en su primera vez.
-   maxDate: Date; La fecha límite hasta la que puede usar el usuario.
-   onUpdateDates: (dates: Array<string>) => void;

-   locale?: string; Por defecto, el idioma está en inglés. Para modificar dicho idioma se le pasa el idioma mediante este atributo.
-   single: boolean; Si se muestra un calendario de selección simple o múltiple.
-   disabled: boolean; Si se muestra deshabilitado.
-   numberOfMonths?: number; Número de meses a mostrar. Para el simple se muestra solo uno y para el múltiple por defecto dos.
-   addedDays?: number; Días a añadir a la fecha final inicial.
-   initialStartDate?: Date; Fecha inicial.
-   initialEndDate?: Date; Fecha Final.
-   onSelectedDates: (startDate: Date, endDate: Date | null) => void; Devuelve las fechas seleccionadas.

El componente Calendar usa la librería `react-dates` y su dependencia `@types/react-dates`;


Ejemplo:

```json
const MultipleCalendar = ({
    locale = "en-GB",
    single = false,
    disabled,
    numberOfMonths = 2,
    addedDays = 15,
    initialStartDate,
    initialEndDate,
    onSelectedDates,
}: MultipleCalendarType) => {
    const [startDate, setStartDate] = useState<moment.Moment | null>(null);
    const [endDate, setEndDate] = useState<moment.Moment | null>(null);
    const [focused, setFocused] = useState<boolean>(false);
    const [focusedInput, setFocusedInput] = useState<
        "startDate" | "endDate" | null
    >(null);

    const changedDate = (date: moment.Moment | null) => {
        setStartDate(date);
        selectedDates();
    };

    const selectedDates = () => {
        const format: string = getLocaleDateFormat(locale);
        let dateStart: string;
        let dateEndDate: string;
        if (single) {
            dateStart = moment(startDate).format(format);
            onSelectedDates(dateStart, "");
        } else {
            dateStart = moment(startDate).format(format);
            dateEndDate = moment(endDate).format(format);
            onSelectedDates(dateStart, dateEndDate);
        }
    };

    useEffect(() => {
        moment.locale(locale);
    }, [locale]);

    useEffect(() => {
        let momentStartDate: moment.Moment;
        let momentEndDate: moment.Moment;
        if (!single) {
            if (initialStartDate && initialEndDate) {
                momentStartDate = moment(initialStartDate);
                momentEndDate = moment(initialEndDate);
                console.log("momentStartDate: ", momentStartDate);
                console.log("momentEndDate: ", momentEndDate);
            } else {
                momentStartDate = moment();
                momentEndDate = moment().add(addedDays, "days");
            }
            setStartDate(momentStartDate);
            setEndDate(momentEndDate);
        } else {
            if (initialStartDate && initialEndDate) {
                momentStartDate = moment(initialStartDate);
            } else {
                momentStartDate = moment();
            }
            setStartDate(momentStartDate);
        }
    }, []);

    return (
        <div className="date-calendar">
            {!single && (
                <DateRangePicker
                    numberOfMonths={numberOfMonths}
                    showDefaultInputIcon
                    inputIconPosition={"after"}
                    startDate={startDate}
                    startDateId="startdate"
                    endDate={endDate}
                    endDateId="enddate"
                    displayFormat={() => getLocaleDateFormat(locale)}
                    disabled={disabled}
                    onDatesChange={({ startDate, endDate }) => {
                        //Force to be 0h on startDate, and 23:59:59 on endDate
                        if (startDate !== null) {
                            startDate = forceStartDate(startDate);
                        }
                        if (endDate !== null) {
                            endDate = forceEndDate(endDate);
                        }
                        setStartDate(startDate);
                        setEndDate(endDate);
                    }}
                    focusedInput={focusedInput}
                    onFocusChange={(focusedInput) =>
                        setFocusedInput(focusedInput)
                    }
                    keepOpenOnDateSelect
                    hideKeyboardShortcutsPanel
                    isOutsideRange={(day) =>
                        isInclusivelyAfterDay(day, moment().add(1, "days"))
                    }
                    renderCalendarInfo={() => (
                        <div className="react__dates-action-buttons">
                            <button
                                className="btn btn-secondary"
                                onClick={() => setFocusedInput(null)}
                            >
                                {loadMessages(locale)?.Cancel}
                            </button>
                            <button
                                className="btn btn-primary"
                                onClick={() => {
                                    setFocusedInput(null);
                                    selectedDates();
                                }}
                            >
                                {loadMessages(locale)?.Accept}
                            </button>
                        </div>
                    )}
                />
            )}
            {single && (
                <SingleDatePicker
                    numberOfMonths={1}
                    showDefaultInputIcon
                    date={startDate}
                    onDateChange={(date: moment.Moment | null) =>
                        changedDate(date)
                    }
                    focused={focused}
                    hideKeyboardShortcutsPanel
                    onFocusChange={({ focused }) => setFocused(focused)}
                    id="single-date-picker"
                />
            )}
        </div>
    );
};

export default MultipleCalendar;
```

`DatePicker` es un componente atómico con su carpeta languages.

### Funcionamiento

El componente Error tiene los atributos:

-   locale?: string; Por defecto, el idioma está en inglés. Para modificar dicho idioma se le pasa el idioma mediante este atributo.
-   startWeekDay?: int; El número de la semana por la que tiene que empezar el calendario, por defecto es 0 (lunes) y llega hasta el 6 (domingo).
-   inputSize?: string; El tamaño del input del selector de fechas, puede tener los valores s, m o l.
-   inputLabel?: string; El mensaje que aparece como label del input de texto.
-   onSelectDate?: function; La función que nos devuelve el día seleccionado en formato Date de javascript.
-   initialDate?: Date; La fecha por defecto que aparecerá seleccionada, por defecto es hoy.
-   maxDate?: Date; La fecha máxima que nos permite seleccionar fechas, más allá de esta los días saldrán disabled.
-   disabled?: boolean; El condicional que determina si el calendario estará disabled o no.
-   calendarInputIcon?: any; El componente (preferiblemente un icono) que saldrá en caso de que el icono por defecto (un calendario) no sirva
-   dateFormat?: el formato que se quiere aplicar a la fecha, si no se le pasa este atributo por defecto coge el de el locale.

Ejemplo:

```javascript
<DatePicker
    locale="es-ES"
    startWeekDay={0}
    inputSize="m"
    inputLabel=""
    onSelectDate={(date: Date) => console.log(date)}
    initialDate={new Date("01/02/2021")}
    maxDate={nnew Date("05/20/2021")}
    disabled={false}
    dateFormat={dateFormat}
/>
```

`KpiIndicator` es un componente atómico.

### Funcionamiento

icon?: any;
value?: number | string;
label?: string;
size?: "l" | "m" | "s";
type?: "primary" | "default";
display?: "row" | "column" | "row-reverse";
weight?: "bold" | "normal";

El componente KpiIndicator tiene los atributos:

-   icon?: React.Node; El icono que seleccionamos para el kpi, siguiendo el principio de abstracción este vendrá como prop para no depender de ninguna librería.
-   value?: string | number; El valor que tendrá el kpi, deberá venir con la unidad en caso de tenerla para no tener dependencias adicionales.
-   label?: string; El valor que tendrá la etiqueta.
-   size?: "l" | "m" (por defecto) | "s"; Determina cual será el tamaño del KpiIndicator, afecta a la etiqueta, el icono y el valor.
-   type?: "primary" | "default" (por defecto); Determina si el value saldrá con color azul (primary) o color blanco (default).
-   display?: "row" (por defecto) | "column" | "row-reverse"; Determina la disposición de los elementos (label, value, icon).
-   weight?: "bold" | "normal" (por defecto); Determina el grosor de la tipografía del valor numérico.
-   iconColor?: string; El valor en hexadecimal del color que queremos que tenga nuestro icono, por defecto sera blanco / negro.
-   groupPosition?: "icon-row" | "icon-column" (por defecto) | "group-column": La posición de los diferentes elementos para cuando tengamos un icono y los demás valores.

Este componente no tiene dependencias adicionales.

Ejemplos de uso:

```javascript
// Size m, Type primary, Weight bold
<KpiIndicator
    value="87%"
    label={intl.formatMessage({
        id:
            "app.smartMeteringDashboard.Monitoring.ComunicationModule",
    })}
    size="m"
    type="primary"
    weight="bold"
/>

// Size l
<KpiIndicator
    value="87%"
    label={intl.formatMessage({
        id:
            "app.smartMeteringDashboard.Monitoring.ComunicationModule",
    })}
    size="l"
/>
```

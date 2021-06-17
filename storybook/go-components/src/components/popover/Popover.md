`Popover` es un componente atómico que está formado por `TriggerIcon` y que este importa los componentes `PopoverController`, `PopoverTrigger`.
Por lo que realmente el componente cuando se importa se hace importando `TriggerIcon`;

### Funcionamiento

`Popover` es un componente que recibe los siguientes atributos:

-   place: placesInterface; Posicón por la que se mostrará el popover.
-   offCenter?: boolean; Si el popover estará centrado. Por defecto es true y es un campo no obligatorio.
-   iconComponent: React.ReactNode; El icono que tras pulsar mostrará el popover
-   triggerClass: string; El nombre de la clase CSS que se aplicará al icono.
-   children: React.ReactNode; Los hijos que se le pasa al componente y que se mostrará dentro del popover.

Ejemplo de `TriggerIcon`:

```json
const Popover = ({
    iconComponent,
    children,
    place,
    offCenter = true,
    triggerClass,
}: PopoverTypes) => {
    return (
        <PopoverController place={place} offCenter={offCenter}>
            <PopoverTrigger>
                <span className={triggerClass}>{iconComponent}</span>
            </PopoverTrigger>
            {children}
        </PopoverController>
    );
};

export default Popover;
```

### Importante

Para que funcione correctamente y se muestre el popover hay que añadir el siguiente `div` en el fichero `html`, `dentro del body`, que se encuentra en la carpeta public.

```json
(<div id="another-root" style="height: 100%;"></div>)
```

Ejemplo:

```json
<body class="light">
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <div id="another-root" style="height: 100%;"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
```

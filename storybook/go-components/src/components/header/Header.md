`Header` es un componente atómico, el cual se encarga de cargar el header en la parte superior con iconos, con sus respectivos comportamientos, y la acción de expandirse o colpasarse.

### Funcionamiento

El componente Header tiene los siguientes atributos:

-   expanded: boolean, por defecto a false.
-   onChangeExpanded: () => boolean, es una función que devuelv el estado de expanded cuando se modifica.
-   icons: Array<IconType> Es un array de iconos
-   logo: React.ReactNode | null. Admeás, es un atributo no obligatorio y es el logo que aparece en el centro del header.
-   PopoverAvatar: React.ReactNode | null. Es un componente que se le pasa al propio componente Header y consiste en este caso a la imagen y el nombre del usuario.
-   LinearIcon: React.ReactNode | null. Es un componente que se le pasa al propio componente Header y consiste en este caso a la imagen/icono de cuadritos con degradado que redirecciona a soc.
-   Breadcumb: React.ReactNode | null. Es un componente que se le pasa al propio componente Header y consiste en el Breadcumb, el cual tiene dentro su comportamiento.

IconType tiene la siguiente estructura:

-   visible: boolean;
-   Component: React.ReactNode | null;

Ejemplo de Array de IconType:

```json
export const icons: Array<IconType> = [
    {
        visible: true,
        Component: <FilePopover key={"file"} />,
    },
    {
        visible: true,
        Component: <FaqPopover key={"question"} />,
    },
    {
        visible: true,
        Component: (
            <SettingsPopover
                languages={languages}
                themes={themes}
                locale="en"
                key={"settings"}
            />
        ),
    },
    {
        visible: true,
        Component: <BellPopover key={"bell"} />,
    },
];
```

Como podemos observar, cada objeto tiene:

-   Si está el botón visible.
-   El componente que le deseamos pasar, (dicho componente tiene su propio comportamiento) o si no le queremos pasar un componente lo ponemos a null.

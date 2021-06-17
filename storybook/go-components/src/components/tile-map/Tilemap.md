`TileMap` es un componente atómico.

### Funcionamiento

`TileMap` es un componente que recibe los siguientes atributos:

-   loading: boolean; Indica si está cargando o no. Finalizará cuando reciba la información que debe mostrar.
-   loadingTitle: String; Texto que se mostrará en el spinner.
-   children?: ReactNode; Los componentes hijos que dibujará una vez haya finalizado de cargar.
-   style?: CSSProperties; Para que el componente sea totalmente atómico se le pasa por este atributo el `gridColumn` y `gridRow`.

Con todos los atributos anteriores lo único que hace es motrar o no los hijos, dependiendo de si ha finalizado su carga o no.

Ejemplo de style:

```json
style={{ gridColumn: "5 / 13", gridRow: "6 / 13" }}
```

`Container` es un componente atómico.

### Funcionamiento

Este componente recibe un único atributo:

-   children?: React.ReactNode;

Basicamente `Container` se encarga de mostrar todo el contenido, tanto los componentes gráficos como mapas, de cada tab de la aplicación. No hace nada más, recibe la información y la pinta. Son otros componentes inferiores los que se encarga de manejar los eventos, etc.

Ejemplo:

```json
const Container = ({ children = null }: ContainerType) => {
    return <div className="container-menu">{children}</div>;
};

export default Container;
```

`DefaultContainer` es un componente reutilizable sin dependecias a otras librerías.

### Funcionamiento

El componente DefaultContainer tiene los siguientes atributos:

-   children: children: React.ReactNode;

Default container es un componente que prepara unos estilos especificos para el layout que contendrá a los hijos que se rendirecen en él.

Ejemplo:

```json
const DefaultContainer = ({ children }: DefaultContainerTypes) => {
    return <div className="default-container">{children}</div>;
};
```

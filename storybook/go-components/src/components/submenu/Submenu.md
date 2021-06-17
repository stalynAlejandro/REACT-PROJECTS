`SubMenu` es un componente atómico.

### Funcionamiento

`SubMenu` es un componente que recibe los siguientes atributos:

-   lefttComponent?: React.ReactNode; El componente que se va a mostrar en la mitad izquierda. Si es null no se muestra nada en la mitad izquierda.
-   rightComponent?: React.ReactNode; El componente que se va a mostrar en la mitad derecha. Si es null no se muestra nada en la mitad derecha.

Ejemplo:

```json
const SubMenu = ({ lefttComponent, rightComponent }: SubMenuType) => {
    return (
        <div className="sub-menu">
            <div className="sub-menu-left">{lefttComponent}</div>
            <div className="sub-menu-right">{rightComponent}</div>
        </div>
    );
};

export default SubMenu;
```

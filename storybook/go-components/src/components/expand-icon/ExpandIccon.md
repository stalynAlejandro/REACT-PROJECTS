`ExpandIcon` es un componente atómico.

### Funcionamiento

El componente ExpandIcon tiene los siguientes atributos:

-   expanded: boolean; Valor del estado del icono para expander.
-   onExpanded: (expanded: boolean) => void; Evento que al llamarse expande y devuelve su valor actual.

Ejemplo:

```json
const ExpandIcon = ({ expanded = false, onExpanded }: ExapndIconType) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(expanded);
    const onExpand = () => {
        const newStatus = !isExpanded;
        setIsExpanded(newStatus);
        onExpanded(newStatus);
    };
    return (
        <div className="expand-icon" onClick={onExpand}>
            <ExpandIconLight />
        </div>
    );
};

export default ExpandIcon;
```

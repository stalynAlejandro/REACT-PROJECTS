`Tooltip` es un componente atómico.

### Funcionamiento

`Tooltip` es un componente que recibe los siguientes atributos:

-   position (optional): "top" | "bottom" | "left" | "right"; Determina la posición del tooltip respecto al elemento children por defecto es "top".
-   delay (optional): number; El número de milisegundos que tardará en aparecer el tooltip por defecto son 50 milisegundos.
-   children: string | React.ReactNode; El elemento que activará/desactivará el tooltip.
-   content: string | React.ReactNode; El contenido del tooltip.

Ejemplos de tooltip:

```javascript
<Tooltip content="My tooltip text" position="bottom">
    <div>My text</div>
</Tooltip>
```

```javascript
<Tooltip content="My tooltip text" position="top" delay={200}>
    <div>My text</div>
</Tooltip>
```

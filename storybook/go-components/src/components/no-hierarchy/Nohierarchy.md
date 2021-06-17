`No Hierarchy` es un componente atómico.

### Funcionamiento

El componente No Hierarchy sirve para mostrar un aviso si no hay ninguna jerarquia seleccionada y tiene los siguientes atributos:

-   noHierarchy: boolean; true para mostrar el componente.
-   locale = "en-GB"; Idioma para el componente que se cargara desde la carpeta languages del propio componente, si hay algun idioma que falte se añade en esa carpeta

Ejemplo:

```json
const NoHierarchyMask = ({
    noHierarchy = true,
    locale = "en-GB",
}: NoHierarchyMaskType) => {
    if (noHierarchy) {
        return (
            <>
                <div className="no-hierarchy-mask">
                    <div className="no-hierarchy-mask-alert-container">
                        <div className="alert-container">
                            <div className="alert-content">
                                <div className="icon-container">
                                    <ExclamationCircle />
                                </div>
                                <div className="text-container">
                                    {loadMessages(locale)?.TITLE}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return null;
};

export default NoHierarchyMask;
```

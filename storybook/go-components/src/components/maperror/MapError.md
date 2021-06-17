`MapError` es un componente atómico con su carpeta languages.

### Funcionamiento

El componente MapError tiene los atributos:

-   locale?: string; Por defecto, el idioma está en inglés. Para modificar dicho idioma se le pasa el idioma mediante este atributo.
-   onClose: () => void; Evento para que al clicar sobre el icono se cierre el componente.


Ejemplo:

```json
const MapError = ({ locale = "en-GB", onClose }: MapErrorType) => {
    return (
        <div className="map-error">
            <div className="map-error-container">
                <div className="map-error-header">
                    <div className="map-error-header-title">{"Error"}</div>
                    <div className="map-error-icon" onClick={onClose}>
                        <CloseIcon />
                    </div>
                </div>
                <div className="map-error-body">
                    <div className="map-error-body-icon">
                        <ExclamationCircleIcon />
                    </div>
                    <div className="map-error-body-message">
                        {loadMessages(locale).MESSAGE}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MapError;
```

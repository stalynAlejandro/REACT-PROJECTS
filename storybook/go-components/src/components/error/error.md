`Error` es un componente atómico con su carpeta languages.

### Funcionamiento

El componente Error tiene los atributos:

-   locale?: string; Por defecto, el idioma está en inglés. Para modificar dicho idioma se le pasa el idioma mediante este atributo.
-   message?: string; El mensaje que queremos mostrar mientras está activo el estado de carga, por defecto es "Ha ocurrido un error" en el idioma correspondiente, salvo que especifiquemos otra cosa.

Ejemplo:

```javascript
if (error) {
    return <Error locale={locale} />;
}
```

```javascript
if (error) {
    return <Error message={intl.formatMessage(...)} />;
}
```

`Loading` es un componente atómico con su carpeta languages.

### Funcionamiento

El componente Loading tiene los atributos:

-   locale?: string; Por defecto, el idioma está en inglés. Para modificar dicho idioma se le pasa el idioma mediante este atributo.
-   message?: string; El mensaje que queremos mostrar mientras está activo el estado de carga, por defecto es "Cargando" en el idioma correspondiente, salvo que especifiquemos otra cosa.

Ejemplo:

```javascript
if (loading) {
    return <Loading locale={locale} />;
}
```

```javascript
if (loading) {
    return <Loading message={intl.formatMessage(...)} />;
}
```

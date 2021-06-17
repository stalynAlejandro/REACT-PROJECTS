Breadcrumb es un componente atómico, el cual se encarga de generar el posicionamiento del usuario en la aplicación mediante los paths.

### Funcionamiento

Breadcrumbs tiene únicamente un atributo, cuyo nombre es breadcumbs y es un Array de strings.

Básicamente, se encarga de dibujar con ciertos estilos, dependiendo del tema, y comportamientos a cada path.

-   El primer path es de tipo `link` y tiene la clase `breadcrumb-item`.
-   El último path tiene la clases `breadcrumb-item breadcrumb-item--active`
-   Si existen paths entre el primero y el último tiene la clase `breadcrumb-item`.

Únicamente el primer path es de tipo `link`.

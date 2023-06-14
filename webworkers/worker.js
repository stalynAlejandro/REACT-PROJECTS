
var almacen = null;

self.onmessage = function (event) {
  console.log('Message from main script:', event.data);
  
  var data = event.data;
  
  var action = data.action;
  console.log('action', action);
  
  switch (action) {
	case "init":
		executeInit(data);
	break;
	case "onchange":
		executeOnChange(data);
	break;
  }

};

function executeInit(data) {
	
	var state = data.state;
	var js = data.js;
	
	postMessage("Hola")
	
	almacen = new Almacen();
	
	almacen.actualizarDesdeEstado(state);
	var datpar = almacen.getDatosTablaPrincipal();
	var modelo = almacen.getModeloTablaPrincipal();
	
	// Ejecutar el javascript la primera vez
	executeFunctionFromString(js, datpar, modelo, true/*editable*/, almacen);
	
  	// postMessage para enviar el resultado al script principal
  	postMessage(almacen.getAccionesSalida())
  	almacen.borrarAccionesSalida();
  	// cómo evitar que las listas se "mezclen"? (condición de carrera)

}

function executeOnChange(data) {
	
	var state = data.state;
	var target = data.target;
	var newValue = data.newValue;
	
	DatosTabla.nuevaTransicion();
	
	// Actualizar el almacen con el nuevo estado
	almacen.actualizarDesdeEstado(state);
	var datpar = almacen.getDatosTablaPrincipal();

	// Notificar el cambio de variable
	// datpar.notificarCambio_(target, newValue);
	
  	// postMessage para enviar el resultado al script principal
  	postMessage(almacen.getAccionesSalida())
  	almacen.borrarAccionesSalida();
}

function executeFunctionFromString(functionString, ...params) {
  const functionToExecute = new Function(`return (${functionString});`)();
  return functionToExecute(...params);
}


/* ModeloTabla */

ModeloTabla = function(nombreEntidad, almacen) {
	this.nombreEntidad_ = nombreEntidad;
	this.almacen_ = almacen;
}

ModeloTabla.prototype.setNombreEntidad = function(nombreEntidad) {
	this.nombreEntidad_ = nombreEntidad;
}

ModeloTabla.prototype.getNombreEntidad = function() {
	return this.nombreEntidad_;
}

ModeloTabla.prototype.crearDatosTabla = function(almacen) {
	var datosTabla = new DatosTabla(almacen, this.nombreEntidad_);
	// this.inicializar(datosTabla);
	return datosTabla;
};

// 
//
ModeloTabla.prototype.ctrl = function(id) {
	if (this.getNombreEntidad()) {
		id = this.getNombreEntidad() + "$" + id;
	} 
	c = ctrl(id, almacen);
	if (c == null) return ctrl(id, almacen);
	else return c;
}

/* Control */

Control = function(id, almacen) {
	this.id_ = id;
	this.observadores_ = {};
	this.almacen_ = almacen;
}

/* Mapa ids -> controles */
Control.mapaControles_ = {}

Control.prototype.getId = function() {
	return this.id_;
}

/* ESO ES NECESARIO? */

// Observar un evento
Control.prototype.observar = function(evento, funcion) {
	if (this.observadores_[evento] == null) {
		this.observadores_[evento] = [];
	}
	this.observadores_[evento].push(funcion);
	// Al observar llamar a la función una vez -> No
	/* funcion(this.get(propiedad)); */
}

// Desobservar un evento, o "*" para todos
Control.prototype.desobservar = function(evento, funcion) {
	if (evento == "*") {
		for (var observador in this.observadores_) {
			this.observadores_[observador] = null;
		}
	}
	else {
		if (this.observadores_[evento] != null) {
			this.observadores_[evento] = null;
		}
	}
}

// Notificar un evento
Control.prototype.notificar = function(evento) {
	
	var argumentos = []; 
    for (var i = 1; i < arguments.length; i++) {
    	argumentos.push(arguments[i]); 
    }

	// Obtener observadores
	var observadores = [];
	if (this.observadores_[evento] != null) 
		observadores = observadores.concat(this.observadores_[evento]);
	if (this.observadores_["*"] != null) 
		observadores = observadores.concat(this.observadores_["*"]);
	
	// Llamarlos con argumentos variables
	for (var i = 0; i < observadores.length; i++) {
		observadores[i].apply(this, argumentos); 
	}
};

/* FIN ESO ES NECESARIO? */

ctrl = Control.getControlDesdeId = function(id, almacen) {
	var control = null;
	// Añadir prefijo
	// id = Control.getPrefijo() + id;		
	if (Control.mapaControles_[id] != undefined) {
		control = Control.mapaControles_[id];
	}
	else {
		control = new Control(id, almacen);
		Control.mapaControles_[id] = control;
	}
	return control;
}

Control.prototype.habilitar = function(habilitar) {
	if (this.almacen_ != null) {
		this.almacen_.registrarAccionSalida("habilitar", { id : this.id_, value: habilitar});
	}
}

Control.prototype.mostrar = function(mostrar) {
	if (this.almacen_ != null) {
		this.almacen_.registrarAccionSalida("mostrar", { id : this.id_, value: mostrar});
	}
}

/* Almacen */

Almacen = function() {
	this.modelos_ = {};					// TODO: ponerlo como variable estática?
	this.datos_ = {};					// Mapa por entidad de colecciones de DatosTabla
	this.accionesSalida_ = [];			// Acciones de salida acumuladas
	this.entidadPrincipal_ = null;		// Entidad principal 
};

Almacen.prototype.getModelo = function(entidad) {
	return this.modelos_[entidad];
}

Almacen.prototype.setModelo = function(entidad, modelo) {
	if (this.entidadPrincipal_ == null) {
		this.entidadPrincipal_ = entidad;	// La primera que llega. TODO: ser más fino
	}
	this.modelos_[entidad] = modelo;
	modelo.setNombreEntidad(entidad);
}

Almacen.dboidFicticio_ = -1;

Almacen.prototype.crearDatosTabla = function(entidad) {
	var modelo = this.getModelo(entidad);
	var dato = modelo.crearDatosTabla(this);
	dato.set("DBOID", Almacen.dboidFicticio_+'');
	Almacen.dboidFicticio_ -= 1;
	return this.registrar_(modelo, dato);
}

Almacen.prototype.leerDatosTabla = function(entidad, condicion) {

	var datos = this.datos_[entidad];
	if (datos) {
		var datosFiltrados = datos.filtrar(condicion);
		if (datosFiltrados && datosFiltrados.numElementos() > 0) {
			datosTabla = datosFiltrados.get(0);
			return datosTabla;
		}
	}
	return null;
};

// Registrar un dato en el almacén (si ya existe devolver ese)
Almacen.prototype.registrar_ = function(modelo, datosTabla) {
	var entidad = modelo.getNombreEntidad();
	var datos = this.datos_[entidad];
	if (datos == undefined) {
		datos = new Coleccion(entidad);
		this.datos_[entidad] = datos;
	}
	var pk = datosTabla.getPk();
	var elementoPk = datos.buscarElemento("DBOID", pk);
	// Unicidad: si ya está en almacén devolver el que ya estaba
	if (elementoPk != null) {	
		datosTabla = elementoPk;
	}
	else if (pk != undefined) {
		datos.incluir(datosTabla);
		/* this.marcarRelacionesLazy_(modelo, datosTabla); */	// Marcar relaciones como pendientes de carga lazy
	}
	return datosTabla;
};

Almacen.prototype.leerColeccion = function(entidad, condicion, campos, orden) {
	this.almacen_ = this;
	
	// Añadir lo ya hay en el almacén
	var datos = this.datos_[entidad];
	if (datos && datos.numElementos() > 0) {
		var datosFiltrados = datos.filtrar(condicion);
		if (datosFiltrados) {
			coleccion.concatenar(datosFiltrados);
			coleccion.ordenar(orden);
		}
	}
	
	coleccion.almacen_ = this;
	
	// Devolver la colección
	return coleccion;
};

Almacen.prototype.getModeloTablaPrincipal = function() {
	if (this.entidadPrincipal_ != null) {
		return this.getModelo(this.entidadPrincipal_);
	}
	else {
		return null;
	}
}

Almacen.prototype.getDatosTablaPrincipal = function() {
	if (this.entidadPrincipal_ != null) {
		return this.leerDatosTabla(this.entidadPrincipal_, "1=1");
	}
	else {
		return null;
	}

}

Almacen.prototype.registrarAccionSalida = function(nombre, payload) {
	var accion = { action: nombre, payload: payload };
	this.accionesSalida_.push(accion);
}

Almacen.prototype.getAccionesSalida = function() {
	return this.accionesSalida_;
}

Almacen.prototype.borrarAccionesSalida = function() {
	this.accionesSalida_ = [];
}


// state: [ { id: variable, valor: valor }, ... ]
// ejemplos nombres variables:
//	nivel1: id = pantalla$variable
//	subpantalla: id = subpantalla$ID_OBJETO_PANTALLA$variable
//	grid: id = pantalla$subpantalla$ID_OBJETO_GRID
//	grid dentro de pantalla: id = subpantalla$ID_OBJETO_PANTALLA$pantalla_grid$ID_OBJETO_GRID
Almacen.prototype.actualizarDesdeEstado = function(state) {
	
	// Para cada objeto del array
	for (var i = 0; i < state.length; i++) {
		var obj = state[i];
		var id = obj.id;
		var value = obj.value;
		if (id) {
			var nombreEntidad = "";
			var lastIndex = id.lastIndexOf("$");
			if (lastIndex !== -1) {
			  nombreEntidad = id.substring(0, lastIndex);
			  id = id.substring(lastIndex + 1);
			}
			// Si no existe el modelo, crearlo
			if (this.getModelo(nombreEntidad) == null) {
				this.setModelo(nombreEntidad, new ModeloTabla(nombreEntidad));
			}
			// Si no existe el datosTabla, crearlo
			var datpar = this.leerDatosTabla(nombreEntidad, "1=1");
			if (datpar == null) {
				datpar = this.crearDatosTabla(nombreEntidad);
			}

			// Asignar valor a variable
			if (value != datpar.get(id)) {	// Sólo cuando cambie realmente				
				datpar.set(id, value);
			}
		}
		
	}
	
}

DatosTabla = function(almacen, nombreEntidad) {
	this.nombreEntidad_ = nombreEntidad;
	this.valores_ = {};
	this.observadores_ = {};
	this.almacen_ = almacen;
}

DatosTabla.prototype.getModelo = function() {
	var modelo = null;
	if (this.almacen_) {
		modelo = this.almacen_.getModelo(this.getNombreEntidad());
	}
	return modelo;
};

DatosTabla.idTransicion_ = 0;

DatosTabla.nuevaTransicion = function() { 
	DatosTabla.idTransicion_++; 
};

DatosTabla.prototype.get = function(propiedad) {
	return this.valores_[propiedad];
};

DatosTabla.prototype.getPk = function() {
	return "DBOID";
};

DatosTabla.prototype.set = function(propiedad, valor) {
	// Conversiones
	// No se hacen
	// Asignar valor
	this.valores_[propiedad] = valor;
	this.almacen_.registrarAccionSalida("set", { id : propiedad, value: valor});
	
	// Si estaba sin modificar, marcar como modificado
    var this_ = this;
	function notificar() { this_.notificarCambio_(propiedad, valor); };	// Notificar
																		// despues
																		// de
																		// asignar
    // setTimeout(notificar, 0);
	notificar();
};

DatosTabla.prototype.getAlmacen = function() {
	return this.almacen_;
};

DatosTabla.prototype.inicializar = function(mapa) {
	for (propiedad in mapa) {
		this.set(propiedad, mapa[propiedad]);
	}
};


// Primero llamar a los concretos, luego a los generales
DatosTabla.prototype.notificarCambio_ = function(propiedad, nuevoValor) {
	var observadores = [];
	if (this.observadores_[propiedad] != null) 
		observadores = observadores.concat(this.observadores_[propiedad]);
	if (this.observadores_["*"] != null) 
		observadores = observadores.concat(this.observadores_["*"]);
	
	for (var i = 0; i < observadores.length; i++) {
		if (observadores[i].ultimoIdTransicion_ != DatosTabla.idTransicion_) {
			observadores[i].ultimoIdTransicion_ = DatosTabla.idTransicion_;
			observadores[i](nuevoValor);
		}
	}
};

DatosTabla.prototype.getNombreEntidad = function() {
	return this.nombreEntidad_;
}

// Observar cualquier cambio en una propiedad
DatosTabla.prototype.observar = function(propiedad, funcion) {
	if (this.observadores_[propiedad] == null) {
		this.observadores_[propiedad] = [];
	}
	this.observadores_[propiedad].push(funcion);
	// Al observar llamar a la función una vez
	
	//BUROWEB-21602 Falla el "set" de una variable en el javascript propio cuanod se pone "suelto" en el codigo javascript
	// funciona bien si el "set" esta en un "observar" por ejemplo
	//Se intentó eliminar esta llamada, pero entonces no muestra los valores iniciales 
	//de los datos particulares que esten ya informados, asi que se deja como está 
	funcion(propiedad == "*" ? undefined : this.get(propiedad));	// TODO: mirar si es necesario
}

// Eliminar cualquier cambio en una propiedad
DatosTabla.prototype.desobservar = function(propiedad) {
	if (propiedad == "*") {
		for (var observador in this.observadores_) {
			this.observadores_[observador] = null;
		}
	}
	else {
		if (this.observadores_[propiedad] != null) {
			this.observadores_[propiedad] = null;
		}
	}
}

/* Coleccion */

Coleccion = function(nombreEntidad) {
	this.nombreEntidad_ = nombreEntidad;
	this.elementos_ = [];
	this.almacen_ = null;
	this.observadores_ = [];
};

Coleccion.prototype.observar = function(funcion) {
	this.observadores_.push(funcion);
	// Al observar llamar a la función una vez
	funcion();
}

// Eliminar cualquier cambio en una propiedad
Coleccion.prototype.desobservar = function() {
	this.observadores_ = [];
}

Coleccion.prototype.notificarCambio_ = function() {
	for (var i = 0; i < this.observadores_.length; i++) {
		if (this.observadores_[i].ultimoIdTransicion_ != DatosTabla.idTransicion_) {
			this.observadores_[i].ultimoIdTransicion_ = DatosTabla.idTransicion_;
			this.observadores_[i]();
		}
	}
};

Coleccion.prototype.getAlmacen = function() {
	return this.almacen_;
}

Coleccion.prototype.setAlmacen = function(almacen) {
	this.almacen_ = almacen;
}

Coleccion.prototype.incluir = function(elemento) {
	if (this.getIndice(elemento) == -1)
	{
		this.elementos_.push(elemento);
		
	}
	
	// Notificar
	DatosTabla.nuevaTransicion();
	this.notificarCambio_();
};

Coleccion.prototype.excluir = function(elemento) {
	var indice = this.getIndice(elemento);
	if (indice != -1) {
		this.elementos_.splice(indice, 1);
	}
	// Notificar
	DatosTabla.nuevaTransicion();
	this.notificarCambio_();
};

Coleccion.prototype.excluirTodo = function() {
	for (var i = 0; i < this.elementos_.length; i++) {
		this.elementos_[i].borrar();
	}
	this.elementos_ = [];
	// Notificar
	DatosTabla.nuevaTransicion();
	this.notificarCambio_();
};

Coleccion.prototype.numElementos = function() {
	return this.elementos_.length;
};

Coleccion.prototype.get = function(indice) {
	if (0 <= indice && indice < this.elementos_.length)
		return this.elementos_[indice];
	else
		return null;
};

Coleccion.prototype.getIndice = function(elemento) {
	for (var i = 0; i < this.elementos_.length; i++) {
		if (elemento == this.elementos_[i]) 
			return i;
	}
	return -1;
};

Coleccion.prototype.getNombreEntidad = function() {
    return this.nombreEntidad_;
};

Coleccion.prototype.buscarElemento = function(propiedad, valor) {
	for (var i = 0; i < this.elementos_.length; i++) {
		var elemento = this.elementos_[i];
		if (elemento.getF(propiedad) == valor) 
			return elemento;
	}
	return null;
};

/* Devuelve una nueva coleccion con los elementos filtrados por la condicion */
Coleccion.prototype.filtrar = function(condicion) {
	var coleccion = null; 
	for (var i = 0; i < this.elementos_.length; i++) {
		var dato = this.elementos_[i];
		if (condicion == undefined || condicion == null || Coleccion.evaluar_(dato, condicion) == true) {
			if (coleccion == null) {
				coleccion = new Coleccion(this.getNombreEntidad());
			}
			coleccion.incluir(dato);
			// coleccion.insertar(this.obtenerCampos_(dato, campos));	/* TODO: tratar campos? */
		}
	}
	return coleccion;
};

/* Evalua una condición sobre un dato */
Coleccion.evaluar_ = function(datosTabla, condicion) {
	var expr = condicion;
	expr = expr.replace("=", "=="); 		// sql -> js
	expr = expr.replace(" OR ", "||"); 		// sql -> js
	expr = expr.replace(" or ", "||"); 		// sql -> js
	expr = expr.replace(" AND ", "&&"); 	// sql -> js
	expr = expr.replace(" and ", "&&"); 	// sql -> js

	for (var nombre in datosTabla.valores_) {
		var valor = datosTabla.get(nombre);
		if (valor != null && valor != undefined) {
			expr = expr.replace(nombre, "'" + valor + "'");
		}
	}

	return eval(expr);
};

/* Ordena la colección por el orden especificado. TODO: que admite como orden? */
Coleccion.prototype.ordenar = function(orden) {
	/* TODO */
};

/* Concatena una colección a otra */
Coleccion.prototype.concatenar = function(coleccion) {
	for (var i = 0; i < coleccion.numElementos(); i++) {
		this.incluir(coleccion.get(i));
	}
};


	
/*

DatosTabla
	getModelo
	get
	set
	getAlmacen
	getNombreEntidad
	observar
	desobservar?

Coleccion
	observar
	desobservar
	getAlmacen
	incluir
	excluir
	excluirTodo
	numElementos
	get
	getIndice
	getNombreEntidad
	getAlmacen

ModeloTabla
	ctrl
	getNombreEntidad

Almacen
	getModelo
	setModelo
	crearDatosTabla
	leerDatosTabla
	leerColeccion
	ejecutarSQL
	contador

Control
	observar
	desobservar
	getElemento
	habilitar
	mostrar

DUDAS:

- Cómo se ejecutan los js de subpantallas?
- Poner mensaje de método no soportado?
- Filtrar la salida para que no haya set de "DBOID" ni más de un set de la misma variable

*/

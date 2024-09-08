# ApiRestful florerista

## Introduccion
Es una api que crea, obtiene, actualiza, y elimina, un catalago de todo los productos del empredimiento del florerista, asi mismo realiza pedidos y visualiza los pedidos.

## Prerrequisitos
- Node.js.
- MongoDB Atlas.


## Instalacion
1. Clonar el reporsitorio.
2. Instalar de pendencias (npm install).
3. Tener instalado Node.js.
4. Instalacion de express, mongoose, body-parser.

## Conexicion a la base de datos
1. Crear una cuenta en MongoDB Atlas..
2. Crear un Cluster: indicando nombre, provedor(aws), region(virginia), elegir prueba gratuita.
3. Configurar sobre la base de datos y un nombre de usuario para esa base de datos y contraseña.
4. Elegir el metodo de conexion drives, donde genera un link(copiar) y sustituir la contraseña por la del usuario.


## Configuracion
1. Crear una variable de entorno y poner ahi el link de conexion elegido anteriomente.
2. Elegir el puerto 3000.
3. Habilitar los cors.
4. Llavar la variable de entorno en app.js.


## Ejecucion
1. Ejecutar el archivo app.js.
2. Se mostrara un mensaje donde indca el puerto y y exito a la conexion la base datos.
3. Se puede ejecutar con mi link propio y las peticiones se haran, no se necesita encender otras cosas para la base de datos.

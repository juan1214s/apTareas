# API Tareas

**API Tareas** es una API desarrollada en **Node.js** con **MySQL** y **Express**. Utiliza **express-rate-limit** para limitar la cantidad de peticiones y **CORS** para manejar los orígenes permitidos. Esta API está diseñada para gestionar una lista de tareas de manera rápida y eficiente.

## Características

- **Gestión de Tareas**: Permite crear, leer, actualizar y eliminar tareas.
- **Límite de Peticiones**: Implementa un límite de 600 peticiones por hora para proteger la API contra abusos.
- **Eficiencia**: Diseñada para un rendimiento rápido en el manejo de tareas.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript del lado del servidor.
- **MySQL**: Motor de base de datos para almacenar tareas.
- **Express**: Framework para construir la API.
- **express-rate-limit**: Limita la cantidad de peticiones para prevenir abusos.
- **CORS**: Maneja los orígenes permitidos para las solicitudes.

## Rutas Disponibles

- **/tarea**
  - `GET /tarea`: Obtener la lista de tareas.
  - `POST /tarea`: Crear una nueva tarea.
  - `PUT /tarea/:id`: Actualizar una tarea existente por su ID.
  - `DELETE /tarea/:id`: Eliminar una tarea específica por su ID.

## Variables de Entorno

Configura las variables de entorno en un archivo `.env` con el siguiente contenido:

- PORT=3500
- SERVER=localhost
- USER=root
- PASSWORD=""
- DATABASE=tareas

**Instalación**

1.Clona el repositorio: git@github.com: juan1214s/apTareas.git
2.Accede al directorio del proyecto: cd apTareas
3.Instala las dependencias necesarias: npm install
4.Configura las variables de entorno en un archivo .env según el ejemplo proporcionado.
5.Inicia el servidor de desarrollo: npm start

## Configuración de CORS

El backend permite solicitudes desde los siguientes orígenes:

- `http://localhost:3500`

Se permiten los siguientes métodos HTTP:

- `GET`
- `POST`
- `PUT`
- `DELETE`

Se permiten las siguientes cabeceras:

- `Content-Type`
- `Authorization`

Se permite el envío de cookies de autenticación.

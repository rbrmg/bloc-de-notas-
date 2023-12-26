# app_bloc_de_notas

## DESCRIPCIÓN
Hemos desarrollado una aplicación para almacenar notas de texto tipo bloc.


## CARACTERÍSTICAS

- Registro y login de usuarios.
- Creación, modificación y eliminación de notas.
- Categorización de notas.
  

## PASOS DEL DESARROLLO

1. Creamos repositorio en github. 

2. Clonamos repositorio de github en una carpeta nueva en el pc (app-notas-texto) con el comando `git clone` + `url de repositorio en github` .
   
3. Iniciamos proyecto con el comando `npm init -y`.
   
4. Instalamos dependencias con `npm install` (+ `express, dotenv, mysql2, jsonwebtoken, bcryptjs, joi`).
   
5. Creamos modulo README.md con `touch README.md` (Descripción app).

6. Creamos estructura básica de carpetas (). 

7. Creamos módulo principal `index.js` 

8. Creamos módulo ocultación archivos con `touch .gitignore`

9. Configuramos variables de entorno en un archivo `.env`. 

10. Creamos archivo de referencia `.env.copy`.n
 
11. Creamos Pool de conexiones en db/`getpool.js`

12. Creamos la bd remoto a MySQL en db/`initDB.js`.

13. Creamos middleware de JWT en middleware/`validateAuth.js`

14. Creamos middleware de manejo de errores en middleware/`errorHandler.js` 

15. Creamos helpers.

16. Creamos schemas para validaciones de datos. 

17. Creamos controlers para programar el funcionamiento de la app de notas.

18. Creamos rutas/Endpoints (para los controllers).

19. Configuramos endpoints en Postman (incluiremos el archivo para los compañeros).

20. Incluimos archivo del postman en el repositorio ("blockDeNotas.postan_collection.son") .


## DEPENDENCIAS

    - express           (Agrega los módulos package.json y package-lock.json)    (El primero!!)
    - dotenv            (Acceder al archivo .env)
    - mysql12           (Manejador la base de datos)
    - jsonwebtoken      (Manejador el usuario)
    - bcrypt            (Encriptador)
    - joi               (Validador exquemas de datos)
    
    

## ENDPOINTS

- **USUARIOS**

    - **POST** Registro de usuario
    - **POST** Login de usuario

  
-  **NOTAS**

    - **POST** Crea una nota
    - **PUT** Modifica una nota
    - **??** Elimina una nota


- **CONSULTAS**

    - **GET** Categorias / busqueda por id 

    - **GET** Notas / req.query
    - **GET** Notas / Devuelve notas por tipología
    - **GET** Notas / Devuelve notas por buscar palabra (o tipología)
    - **GET** Notas /Devuelve el detalle de la nota con id = id


## endpoints de stephano 
  
  1) POST /register
  2) POST /login

  1) GET /categorias (devuelve todas las categorias con id)

  1) POST /notas (crea la nota)
  2) PUT /notas/:id (modifico la nota)

  3) GET /notas (req.query):
  4) GET /notas?tipologia=2 (devuelve todas las notas de tipologia 2)
  5) GET /notas?search="algo"$tipologia=2 (devuelve todas las notas de tipologia 2 que contienen la palabra algo)
  6) GET /notas/:id (devuelve el dettalle de la nota con id=id req.params)

  
//pasos import de los endoints
/*
  1) USUARIOS: login y register ✅
  2) CATEGORIAS: obtener todas ✅
  3) NOTA: crearla ✅
  4) NOTA: modificarla ✅
  5) NOTA: obtener detalle ✅
  6) BUSQUEDA NOTAS:(4) ? 🟥
*/
   
 //FALTA REVISAR:
-Si tenemos todos los módulos necesarios (Primera revisión hecha)
-Funciones de create,modify,delete categorias(OPCIONAL PERO SU CARPETA SERIA `categoryFunction`)
-revisar imports de Controllers (Primera revisión hecha)
- Terminar models.
-Autenticación y Autorización:
  Implementar el sistema completo de autenticación, incluida la gestión de sesiones, si es necesario.
  Definir roles y permisos para diferentes tipos de usuarios y asegurarse de que las rutas estén protegidas adecuadamente.
-Contraseñas**
-Peticiones postman (Desarrollar pruebas unitarias y de integración para verificar que todas las funcionalidades funcionen como se espera.)
-Comprobaciones de si funciona todo

## Uso

Para ejecutar el proyecto:

```bash
npm start



# bloc-de-notas-

## DESCRIPCIÓN

API de un bloc de notas con registro de usuarios y categorias de notas.

### PASOS SEGUIDOS

1. Al inicar proyecto hacer npm init -y para instalar dependencias.

2. Instalación dependencias (Dotem, Express..).

3. Creación de modulos, .env, .env.copy y .gitignore (Ocultación del .env).

4. Creación y distribución de carpetas.

5. Creación de módulos, (principal "main.js").

6. Desarrollo de la BD ("getpool.js y initDb.js")

7. Desarrollo de controllers
   (
   )

8) Desarrollo de middlewares (Gestion de errores, "validacionDeUsuario.js" y validacion del jsonwebtoken)

9) Desarrollo de models (category.js, note.js y user.js)

**FALTA COMPLETAR**

<<<<<<< adesionMiddlewares 7. Creación de endpoints en Postman, (JSON incluido en el repositorio "blockDeNotas.postan_collection.son")

======= 10) Creación de endpoints en Postman, (JSON incluido en el repositorio "blockDeNotas.postan_collection.son")

> > > > > > > main

## ENDPOINTS

- **USUARIOS**

<<<<<<< adesionMiddlewares

- **POST** Registro de usuario

- # **POST** Login de usuario

      - **POST** Registro de usuario
      - http://localhost:3000/register

      - **POST** Login de usuario
      - http://localhost:3000/login

  > > > > > > > main

- **NOTAS**

<<<<<<< adesionMiddlewares

- # **POST** Crea una nota

      - **POST** Crea una nota
      - http://localhost:3000/notes

      - **PUT** Modifica una nota
      - http://localhost:3000/notes

  > > > > > > > main

- **PUT** Modifica una nota

- **CONSULTAS**

<<<<<<< adesionMiddlewares

- **GET** Categorias / busqueda por id

- **GET** Notas / req.query

- **GET** Notas / Devuelve notas por tipología

- # **GET** Notas / Devuelve notas por buscar palabra (o tipología)

      - **GET** Categorias / busqueda por id
      - http://localhost:3000/categories


      - **GET** Notas / req.query
      - http://localhost:3000/notes

      - **GET** Notas / Devuelve notas por tipología
      - http://localhost:3000/notes?category=1

      - **GET** Notas / Devuelve notas por buscar palabra (o tipología)
      - http://localhost:3000/notes?category=1&search="libro"

      - **GET** Notas /Devuelve el detalle de la nota con id = id
      - http://localhost:3000/notes?search="libro"

  > > > > > > > main

- **GET** Notas /Devuelve el detalle de la nota con id = id

<<<<<<< adesionMiddlewares

## endpoints de stephano

=======

## endpoints de Stephano

1. POST /register
2. POST /login
   > > > > > > > main

1) POST /register
2) POST /login

3) GET /categorias (devuelve todas las categorias con id)

<<<<<<< adesionMiddlewares 4. POST /notas (crea la nota) 5. PUT /notas/:id (modifico la nota)

6. GET /notas (req.query):
7. GET /notas?tipologia=2 (devuelve todas las notas de tipologia 2)
8. GET /notas?search="algo"$tipologia=2 (devuelve todas las notas de tipologia 2 que contienen la palabra algo)

9. # GET /notas/:id (devuelve el dettalle de la nota con id=id req.params)

1) GET /notas (req.query):
2) GET /notas?tipologia=2 (devuelve todas las notas de tipologia 2)
3) GET /notas?search="algo"$tipologia=2 (devuelve todas las notas de tipologia 2 que contienen la palabra algo)

4) GET /notas/:id (devuelve el dettalle de la nota con id=id req.params)

5) Utilizamos node main.js para ejecutar la aplicacion
   > > > > > > > main

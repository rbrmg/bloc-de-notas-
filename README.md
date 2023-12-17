# bloc-de-notas-


## DESCRIPCIÓN

API de un bloc de notas con registro de usuarios y categorias de notas.

### PASOS SEGUIDOS

1) Al inicar proyecto hacer npm init -y para instalar dependencias.

2) Instalación dependencias (Dotem, Express..).

3) Creación de modulos, .env, .env.copy y .gitignore (Ocultación del .env).

4) Creación y distribución de carpetas.

5) Creación de módulos, (principal "main.js").

6) Desarrollo de la BD ("getpool.js y initDb.js")

7) Desarrollo de controllers ()

**FALTA COMPLETAR**

7) Creación de endpoints en Postman, (JSON incluido en el repositorio "blockDeNotas.postan_collection.son")
   
## ENDPOINTS

- **USUARIOS**

    - **POST** Registro de usuario

    - **POST** Login de usuario

  
-  **NOTAS**

    - **POST** Crea una nota

    - **PUT** Modifica una nota


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

  

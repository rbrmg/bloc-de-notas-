# bloc-de-notas-

al inicar proyecto hacer npm i para instalar dependencias

ENDPOINTS:

POST /register
POST /login

GET /categorias (devuelve todas las categorias con id)

POST /notas (crea la nota)

GET /notas (req.query):
GET /notas?tipologia=2 (devuelve todas las notas de tipologia 2)
GET /notas?search="algo"$tipologia=2 (devuelve todas las notas de tipologia 2 que contienen la palabra algo)

GET /notas/:id (devuelve el dettalle de la nota con id=id req.params)

PUT /notas/:id (modifico la nota)

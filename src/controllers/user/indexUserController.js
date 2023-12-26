//Módulo de unificacion de archivos Control de usuarios

//Importamos los módulos de usuarios
import registerController from './userFunction/registerController.js';
import loginController from './userFunction/loginController.js';

//exportamos funciones a rutas (user.routers.js)
export { registerController, loginController };
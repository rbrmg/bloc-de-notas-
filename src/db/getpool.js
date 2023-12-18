//importamos mysql y variables de entorno
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

//Usuario (viene de .env)
const { MYSQL_HOST, MYSQL_USER, MYSQL_PASS, MYSQL_DB } = process.
env;

//Creamos petición de conexiones
let pool;

// Al llamar a la función getPool, si no existe un pool todavía, crea uno y nos los da. Si ya existe, nos los da automaticamente.
const getPool = async () => {
 
  try { //Establecemos captura en caso de error de conexiones
    if (!pool) {//Verificamos que el pool no esté inicializado anteriormente

      console.log(MYSQL_PASS);
      //Creamos pool temporal para dar de alta la Base si es que no existe
      const poolTemp = mysql.createPool({
        host: MYSQL_HOST, //envio el host para la conexión
        user: MYSQL_USER, //envio el user
        password: MYSQL_PASS, //envio el password
      });

      await poolTemp.query(`CREATE DATABASE IF NOT EXISTS ${MYSQL_DB}`);

      pool = mysql.createPool({//Comenzamos a crear el pool mediante MYSQL y le envío un objeto
        connectionLimit: 10, // el limite  de base (modificable)
        host: MYSQL_HOST, //Host para la conexión
        user: MYSQL_USER,//User
        password: MYSQL_PASS,//Password
        database: MYSQL_DB,//Determinamos la base a la que conectarnos
        timezone: "Z",//Z para horario UTC(horario golbal)
        //METER UN CONSOLE.LOG (FALTANTE)
      });//Cerramos el createPool

    }//Cerramos el if donde valido si no está inicializado el pool

    
    return pool; //retornamos el pool de conexiones
  } catch (err) { //catcheamos el error, recibo error como variable
    console.error(err);//mostramos el error
  }//Cerramos el trycatch
};


//exportamos la función getPool para usar en otros archivos.(models, node controllers, node categories, main.js)
export default getPool;

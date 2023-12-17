//importamos mysql y variables de entorno
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

//Usuario (viene de .env)
const { MYSQL_HOST, MYSQL_USER, MYSQL_PASS, MYSQL_DB } = process.env;

//Creamos petición de conexiones
let pool;

// Al llamar a la función getPool, si no existe un pool todavía, crea uno y nos los da. Si ya existe, nos los da automaticamente.
const getPool = async () => {
  //Establecemos captura en caso de error de conexiones
  try {
    if (!pool) {
      console.log(MYSQL_PASS);
      //Creamos pool temporal para dar de alta la Base si es que no existe
      const poolTemp = mysql.createPool({
        host: MYSQL_HOST, //envio el host para la conexión
        user: MYSQL_USER, //envio el user
        password: MYSQL_PASS, //envio el password
      });

      await poolTemp.query(`CREATE DATABASE IF NOT EXISTS ${MYSQL_DB}`);

      pool = mysql.createPool({
        connectionLimit: 10, // el limite  de base (modificable)
        host: MYSQL_HOST,
        user: MYSQL_USER,
        password: MYSQL_PASS,
        database: MYSQL_DB,
        timezone: "Z",
        //METER UN CONSOLE.LOG (FALTANTE)
      });
    }

    //retornamos el pool de conexiones
    return pool;
  } catch (err) {
    console.error(err);
  }
};

//exportamos la función getPool para usar en otros archivos.
export default getPool;

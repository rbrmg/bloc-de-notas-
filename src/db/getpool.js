
//importamos mysql y variables de entorno
import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

//usuario
const {
    PORT,
    MYSQL_HOST,
    MYSQL_USER,
    MYSQL_PASS,
    MYSQL_DB
    } = process.env;

//creamos peticion de conexiones
let pool;

const getpool = async () => {

    //establecemos captura en caso de error de conexiones
    try {


        if(!pool){

                //Crear pool temporal para dar de alta la Base si es que no existe
                const poolTemp = mysql.createPool({
                    host: MYSQL_HOST, //envio el host para la conexión
                    user: MYSQL_USER, //envio el user 
                    password: MYSQL_PASS, //envio el password
                })
    
                await poolTemp.query(`CREATE DATABASE IF NOT EXISTS ${MYSQL_DB}`);

            pool = mysql.createPool ({
                connectionLimit: 10,// el limite  de base (modificable)
                host: MYSQL_HOST,
                user: MYSQL_USER,
                password: MYSQL_PASS,
                database:MYSQL_DB,
                timezone: "Z", 
              //METER UN CONSOLE.LOG (FALTANTE)
            });

        }

        //retorno el pool de conexiones
        return pool;
    } catch (err) {
        console.error(err);
    }
};

console.log ("SIEMRPE")

//exporto la funcion getPool para usar en otros archivos.
export default geetPool;


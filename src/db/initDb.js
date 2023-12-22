//Módulo de creación de la bd

//Importamos pool de conexiones
import getPool from "./getpool.js";


// Función crea de cero la DB y sus tablas
const main = async () => {
  // Variable que almacenará una conexión con la base de datos.
  let pool;

  try {
    pool = await getPool();

    //Borramos y creamos las tablas
    console.log("Borrando tablas...");
    await pool.query("DROP TABLE IF EXISTS notas, categorias, users");
    console.log("Creando tablas...");

    //Creamos tabla de usuarios.
    await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
            id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL,
            password VARCHAR(100) NOT NULL,
            userName VARCHAR(15) NOT NULL,                                   
            createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
            modifiedAt DATETIME ON UPDATE CURRENT_TIMESTAMP
        )
    `);
    //Creamos tabla de categorias.
    await pool.query(`
        CREATE TABLE IF NOT EXISTS categorias (
        id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(50) UNIQUE NOT NULL,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,modifiedAt DATETIME ON UPDATE CURRENT_TIMESTAMP 
)
`);
    //Creamos tabla de notas.
    await pool.query(`
            CREATE TABLE IF NOT EXISTS notas (
            id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
            title VARCHAR(50) NOT NULL,
            detail TEXT,
            text TEXT NOT NULL,
            categoriaId  INT UNSIGNED NOT NULL,
            userId INT UNSIGNED NOT NULL,
            createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
            modifiedAt DATETIME ON UPDATE CURRENT_TIMESTAMP,
            FOREIGN KEY (userId) REFERENCES users(id),
            FOREIGN KEY (categoriaId) REFERENCES categorias(id)
        )
    `);

    console.log("¡Tablas creadas!");

    //Insertamos categorias en su tabla
    await pool.query(`
    INSERT INTO categorias(name)
    VALUES 
       ("Arte"),
       ("Ciencia"),
       ("Cultura"),
       ("Deportes"),
       ("Gastronomía"),
       ("Idiomas"),
       ("Música"),
       ("Naturaleza"),
       ("Tecnología"),
       ("Otros");
       ;
        `);
    console.log("Categorias creadas!");
    //Aviso de Final de proceso de creación de la BD.
    console.log("¡Base de Datos completa!✅");
  } catch (err) {
    console.error(err);
  } finally {
    // cerramos el proceso.
    process.exit();
  }
};
// Ejecutamos la función anterior.
main();
import getPool from "./getpool.js";

const main = async () => {
  // Variable que almacenará una conexión con la base de datos.
  let pool;

  try {
    pool = await getPool();

    console.log("Borrando tablas...");

    await pool.query("DROP TABLE IF EXISTS notas, categorias, users");

    console.log("Creando tablas...");

    //Creamos la tabla de usuarios.
    await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
            id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL,
            password VARCHAR(100) NOT NULL,
            userName VARCHAR(15) NOT NULL,                                                                                                                                                                                                             
            createdAt DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
            modifiedAt DATETIME ON UPDATE CURRENT_TIMESTAMP NOT NULL
        )
    `);

    await pool.query(`
        CREATE TABLE IF NOT EXISTS categorias (
        id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(50) NOT NULL,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
)
`);

    //Creamos la tabla de notas.
    await pool.query(`
            CREATE TABLE IF NOT EXISTS notas (
            id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
            title VARCHAR(50) NOT NULL,
            text TEXT NOT NULL,
            categoriaId  INT UNSIGNED,
            userId  INT UNSIGNED,
            createdAt DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
            FOREIGN KEY (userId) REFERENCES users(id),
            FOREIGN KEY (categoriaId) REFERENCES categorias(id)
        )
    `);

    console.log("¡Tablas creadas!");

    await pool.query(`
    INSERT INTO categorias(name)
    VALUES 
       ("v1"),
       ("v2");
        `);
    console.log("Categorias creadas!");
  } catch (err) {
    console.error(err);
  } finally {
    // cerramos el proceso.
    process.exit();
  }
};
// Ejecutamos la función anterior.
main();

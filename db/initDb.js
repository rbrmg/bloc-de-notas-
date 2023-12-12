import geetPool from "./getpool.js";

const main = async () => {
    // Variable que almacenará una conexión con la base de datos.
    let pool;

    try {
        pool = await getPool();

        console.log('Borrando tablas...');

        await pool.query(
            'DROP TABLE IF EXIST entrynotas, usuarios'
        );
        console.log('Creando tablas...');

        //Creamos la tabla de usuarios.
        await pool.query(`
            CREATE TABLE IF NOT EXIST users (
            id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL,
            password VARCHAR(100) NOT NULL,
            userName VARCHAR(15) NOT NULL,                                                                                                                                                                                                             
            createdAt DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
            modifiedAt DATETIME ON UPDATE CURRENT_TIMESTAMP NOT NULL
        )
    `);
        //Creamos la tabla de notas.
        await pool.query(`
            CREATE TABLE IF NOT EXIST notas (
            id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
            title VARCHAR(50) NOT NULL,
            text LONGTEXT ()NOT NULL,
            categoria VARCHAR(50) NOT NULL,
            createdAt DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
            FOREIGN KEY (userId) REFERENCES users(id)
        )
    `);
        console.log('¡Tablas creadas!');
    } catch (err) {
        console.error(err);
    } finally {
        // cerramos el proceso.
        process.exit();
    }
};
// Ejecutamos la función anterior.
main();
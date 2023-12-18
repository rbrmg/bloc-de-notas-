o;

// Función para cambiar la contraseña de un usuario
export const editUserPassword = async (email, recoverPassCode, newPass) => {
  const user = await userServices.getUserByEmailOrUsername(email);

  // Verifica si el usuario solicitó una recuperación de contraseña
  if (!user.recoverPassCode) {
    errors.conflictError(
      "El usuario no solicitó una recuperación de contraseña.",
      "INVALID_RECOVER_PASS_ERROR"
    );
  }

  // Verifica si el código de recuperación es correcto
  if (user.recoverPassCode !== recoverPassCode) {
    errors.conflictError(
      "El código de recuperación es incorrecto.",
      "PASSWORD_RECOVER_CODE_ERROR"
    );
  }

  // Actualiza la contraseña del usuario en la base de datos
  await userServices.updateUserPassword(user, newPass);
};

// Función para solicitar la recuperación de contraseña y enviar el código por correo electrónico
export const passwordRecover = async (email) => {
  const user = await userServices.getUserByEmailOrUsername(email);

  // Obtiene el código de recuperación y actualiza la base de datos
  const recoverPassCode = await userServices.updatePasswordRecover(user);

  // Envía un correo electrónico con el código de recuperación
  const emailBody = `
          Se ha solicitado la recuperación de contraseña para este email en Diario de Viajes. 
                      
          Utiliza el siguiente código para crear una nueva contraseña: ${recoverPassCode}
  
          Si no has sido tú, ignora este email.
       `;
  await sendMail(email, "Recuperación de contraseña", emailBody);
};

// Función para registrar un nuevo usuario
export const newUserRegister = async (body, registrationCode) => {
  const { username, password, email } = body;

  // Hash de la contraseña antes de almacenarla
  const hashedPassword = await bcrypt.hash(password, 10);

  // Registra el nuevo usuario y obtiene la respuesta
  const response = await userServices.newUserRegister(
    username,
    password,
    email,
    registrationCode
  );

  // Verifica si hubo un error al registrar el nuevo usuario
  if (response.affectedRows !== 1) {
    errors.conflictError(
      "Error al registrar nuevo usuario.",
      "USER_REGISTER_ERROR"
    );
  }

  // Envía un correo electrónico con el enlace de activación
  const emailBody = `
        <h1>Bienvenido ${username}</h1>
        Gracias por registrarte en Diario de Viajes. Para activar tu cuenta, haz clic en el siguiente enlace:

        <a href="http://localhost:8080/users/validate/${registrationCode}">Activar mi cuenta</a>
     `;
  await sendMail(email, "Activa tu usuario", emailBody);
};

// Función para validar el registro de un usuario
export const validateUser = async (registrationCode) => {
  const response = await userServices.validateUser(registrationCode);

  // Verifica si hubo un error al validar el correo electrónico
  if (response.affectedRows !== 1) {
    errors.conflictError(
      "Error al validar el correo electrónico.",
      "USER_VALIDATED_ERROR"
    );
  }
};

// Función para iniciar sesión de un usuario y generar un token JWT
export const loginUser = async (email, password) => {
  const user = await userServices.getUserByEmailOrUsername(email);

  // Compara la contraseña proporcionada con la almacenada en la base de datos
  const validPassword = await bcrypt.compare(password, user.password);

  // Verifica si las credenciales son válidas
  if (!validPassword) {
    errors.notAuthorizedError("Credenciales inválidas", "INVALID_CREDENTIALS");
  }

  // Verifica si el usuario está activo
  if (!user.active) {
    errors.userPendingActivation(
      "Usuario pendiente de activar. Verifique su correo electrónico para validar su cuenta."
    );
  }

  // Crea un token JWT con la información del usuario
  const tokenInfo = {
    id: user.id,
    role: user.role,
  };

  const token = jwt.sign(tokenInfo, process.env.SECRET, {
    expiresIn: process.env.EXPIRE,
  });

  return token;
};

// Función para obtener la lista de usuarios
export const getUsers = async () => {
  const users = await userServices.getUsers();
  return users;
};

// Función para obtener un usuario por su ID
export const getUserById = async (userId) => {
  const user = await userServices.getUserById(userId);
  return user;
};

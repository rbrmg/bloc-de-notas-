//MÓDULO PRINCIPAL DE SCHEMAS 

// Importamos todos los archivos 
//Entries
import newEntrySchema from './entries/newEntry.schema.js';
import voteEntrySchema from './entries/voteEntry.schema.js';
//Users
import editUserPasswordSchema from './users/editUserPassword.schema.js';
import loginuserSchema from './users/loginUser.schema.js';
import newUserSchema from './users/newUser.schema.js';
import passwordRecoverSchema from './users/passwordRecover.schema.js';
import validateUserSchema from './users/validateUser.schema.js';
//Img
import imgSchema from './imgSchema.js';
//Error messages
import { errorMsg, errorMsgUsername, errorMsgPassword } from './joi.error.messages.js';

// Exporta todos los esquemas
export {
  newEntrySchema,
  voteEntrySchema,
  editUserPasswordSchema,
  loginuserSchema,
  newUserSchema,
  passwordRecoverSchema,
  validateUserSchema,
  imgSchema,
  errorMsg,
  errorMsgUsername,
  errorMsgPassword
};

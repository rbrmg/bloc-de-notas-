//MÓDULO PARA VALIDAR CONTRASEÑA

//Importamos joi (validacion y errores personalizados)
import joi from 'joi';
import * as joiMsg from '../joi.error.messages.js';

const passwordRecoverSchema = joi.object({
    email: joi.string().email().required().messages(joiMsg.errorMsg)
});

export default passwordRecoverSchema;
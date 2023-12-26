//MÓDULO DE VALIDACIÓN DE IMÁGENES

//Importamos joi (validacion y errores personalizados)
import joi from 'joi';
import * as joiErrorMessages from './joi.error.messages.js';

const imgSchema = joi.object({
    name: joi.string().required().messages(joiErrorMessages),
    mimetype: joi.string().valid('image/png','image/jpeg').required().messages(joiErrorMessages),
    size: joi.number().max(5000000).required().messages(joiErrorMessages)
}).unknown(true);

export default imgSchema;
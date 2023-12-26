//MÓDULO PARA VALIDAR CODIGO DE REGISTRO

//Importamos joi (validacion y errores personalizados)
import joi from 'joi';
import * as joiMsg from '../joi.error.messages.js';

const validateUserSchema = joi.object({
    registrationCode: joi.string()
        .required()
        .pattern(/^\S*$/)
        .messages({...joiMsg.errorMsg,...joiMsg.errorMsgUsername})
    });

export default validateUserSchema;
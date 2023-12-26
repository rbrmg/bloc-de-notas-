//MÓDULO DE VALIDACIÓN DE INICIO DE SESION

//Importamos joi (validacion y errores personalizados)
import joi from 'joi';
import * as joiMsg from '../joi.error.messages.js';

const loginUserSchema = joi.object({
    password: joi.string()
                .pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[¡!$%^&*()_+|~=`{}:";'<>¿?,.])[a-zA-Z0-9¡!$%^&*()_+|~=`{}:";'<>¿?,.]{8,}$/)
                .required()
                .messages({...joiMsg.errorMsg, ...joiMsg.errorMsgPassword}),
    email: joi.string().required().messages(joiMsg.errorMsg)
});

export default loginUserSchema;
import joi from 'joi';
import joiMsg from './definicionDeMensajesDeError.js'


//esto crea un usario nuevo 
const newUserSchema = joi.object({
    username: joi.string()
                    .min(3)
                    .max(30)
                    .required()
                    .pattern(/^\S*$/)
                    .messages({...joiMsg.errorMsg, ...joiMsg.errorMsgUsername}), 
    password: joi.string()
                .pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[¡!$%^&*()_+|~=`{}:";'<>¿?,.])[a-zA-Z0-9¡!$%^&*()_+|~=`{}:";'<>¿?,.]{8,}$/)
                .required()
                .messages({...joiMsg.errorMsg, ...joiMsg.errorMsgPassword}),
    email: joi.string().email().required().messages(joiMsg.errorMsg)
});


//esto loguea un usuario 
const loginUserSchema = joi.object({
    password: joi.string()
    .pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[¡!$%^&*()_+|~=`{}:";'<>¿?,.])[a-zA-Z0-9¡!$%^&*()_+|~=`{}:";'<>¿?,.]{8,}$/)
    .required()
    .messages({...joiMsg.errorMsg, ...joiMsg.errorMsgPassword}),
    email: joi.string().required().messages(joiMsg.errorMsg)
});


export default{newUserSchema,
    loginUserSchema}; 
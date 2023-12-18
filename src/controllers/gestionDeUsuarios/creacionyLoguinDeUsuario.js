import joi from 'joi';
import joiMsg from './definicionDeMensajesDeError.js'


//Creamos un usario nuevo 
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


//Logueamos un usuario 
const loginUserSchema = joi.object({
    password: joi.string()
    .pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[¡!$%^&*()_+|~=`{}:";'<>¿?,.])[a-zA-Z0-9¡!$%^&*()_+|~=`{}:";'<>¿?,.]{8,}$/)
    .required()
    .messages({...joiMsg.errorMsg, ...joiMsg.errorMsgPassword}),
    email: joi.string().required().messages(joiMsg.errorMsg)
});

//Exportamos (a "").
export default{newUserSchema,
    loginUserSchema}; 
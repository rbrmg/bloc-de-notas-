//MÓDULO VALIDACIÓN DE VOTACIÓN DE ENTRADA

//Importamos joi (validacion y errores personalizados)import joi from 'joi'
import joi from 'joi';
import * as joiMsg from '../joi.error.messages.js'

const voteEntrySchema = joi.object({
  value: joi.number().integer().min(1).max(5).required().messages(joiMsg)//Reglas para el valor
})

export default voteEntrySchema

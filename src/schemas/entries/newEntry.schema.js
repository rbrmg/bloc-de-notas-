//MÓDULO VALIDACION DE NUEVA ENTRADA 

//Importamos joi (validacion y errores personalizados)
import joi from 'joi'
import * as joiMsg from '../joi.error.messages.js'

//Exquema de validación para una nueva entrada.
const newEntrySchema = joi.object({
  title: joi.string().min(5).max(50).required().messages(joiMsg), //Reglas para el titulo
  place: joi.string().min(3).max(30).required().messages(joiMsg), //Reglas para el lugar
  description: joi.string().min(10).max(500).required().messages(joiMsg) //Reglas para la descripcion
})

export default newEntrySchema

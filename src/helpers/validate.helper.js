import errorHelper from './errors.helper.js'

const validateHelperMiddleware = async (req, res, next) => {
  const { schema, data } = req;  // Asegúrate de que req contenga tanto schema como data

  if (!schema || !data) {
    return errorHelper.badRequestError('Schema o datos faltantes');
  }

  try {
    await schema.validateAsync(data);
    next();  // Continúa con el siguiente middleware o ruta
  } catch (error) {
    console.error(error);
    errorHelper.badRequestError(error.details[0]?.message);
  }
};

export default validateHelperMiddleware;



/*const validateHelper = async (schema, data) => {
  try {
    await schema.validateAsync(data)
  } catch (error) {
    console.error(error)
    errorHelper.badRequestError(error.details[0]?.message)
  }
}

export default validateHelper*/

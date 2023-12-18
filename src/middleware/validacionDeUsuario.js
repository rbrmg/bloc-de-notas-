import { body, validationResult } from "express-validator";

// Middleware de validación para el registro de usuario
const validateNewUser = [
  body("username").isString().isLength({ min: 3, max: 30 }).trim(),
  body("password").isString().isStrongPassword().trim(),
  body("email").isEmail().normalizeEmail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: "error",
        message: "Error de validación",
        errors: errors.array(),
      });
    }
    next();
  },
];
export { validateNewUser };

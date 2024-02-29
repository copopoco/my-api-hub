import { body, query } from "express-validator";

const getAllTodosQueryValidators = () => {
  return [query("owner").trim().toLowerCase()];
};

const createTodoValidator = () => {
  return [
    body("title").trim().notEmpty().withMessage("Todo title is required"),
    body("description").optional().trim(),
    body("owner").optional().trim().toLowerCase(),
  ];
};

const updateTodoValidator = () => {
  return [
    body("title")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("Todo title is required"),
    body("description")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("Todo title is required"),
  ];
};

export { createTodoValidator, updateTodoValidator, getAllTodosQueryValidators };

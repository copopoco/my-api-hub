import { Router } from "express";

import {
  createTodo,
  deleteTodo,
  getAllTodos,
  //   getTodoById,
  //   toggleTodoDoneStatus,
  //   updateTodo,
} from "../../controllers/todo/todo.controllers.js";
import {
  createTodoValidator,
  getAllTodosQueryValidators,
  updateTodoValidator,
} from "../../validators/todo/todo.validators.js";
import { mongoIdPathVariableValidator } from "../../validators/common/mongodb.validators.js";
import { validate } from "../../validators/validate.js";

const router = Router();

function check(req, res, next) {
  console.log(req.body, "something");
  next();
}

router
  .route("/")
  .post(check, createTodoValidator(), validate, createTodo)
  .get(getAllTodosQueryValidators(), validate, getAllTodos);

router
  .route("/:todoId")
  //   .get(mongoIdPathVariableValidator("todoId"), validate, getTodoById)
  //   .patch(
  //     mongoIdPathVariableValidator("todoId"),
  //     updateTodoValidator(),
  //     validate,
  //     updateTodo
  //   )
  .delete(mongoIdPathVariableValidator("todoId"), validate, deleteTodo);

// router
//   .route("/toggle/status/:todoId")
//   .patch(
//     mongoIdPathVariableValidator("todoId"),
//     validate,
//     toggleTodoDoneStatus
//   );

export default router;

import express from "express";
import todos from "../db/db";
import { postTodo, getTodo, updateTodo, deleteTodo } from "./controller";

const router = express.Router();

router.post("/api/v1/todos", postTodo);
router.get("/api/v1/todos/:id", getTodo);
router.put("/api/v1/todos/:id", updateTodo);
router.delete("/api/v1/todos/:id", deleteTodo);

export default router;

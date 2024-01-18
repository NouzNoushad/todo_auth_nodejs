import express from "express"
import { createTodo, getAllTodo, updateTodo, deleteTodo} from "../controllers/todo_controllers.js";

const router = express.Router()

router.post('/create_todo', createTodo);
router.get('/get_todo', getAllTodo);
router.patch('/update_todo/:id', updateTodo);
router.delete('/delete_todo/:id', deleteTodo);

export default router
import todoSchema from "../models/todo_model.js";

export const createTodo = async (req, res) => {
	try {
		const { title, description } = req.body;
		const newTodo = todoSchema({
			title,
			description
		});
		const todo = await newTodo.save();
		res.status(201).json({
			message: "Todo has created successfully", data: {
				title: todo.title,
				description: todo.description
		}})
	} catch (error) {
		res.status(500).json({ message: "Error while creating", error: error });
	}
}

export const getAllTodo = async (req, res) => {
	try {
		const todoList = await todoSchema.find({});
		res.status(201).json({
			message: `${todoList.length} todo list`, todoList
		});
	} catch (error) {
		res.status(500).json({ message: "Error while creating", error: error });
	}
}

export const updateTodo = async (req, res) => {
	try {
		const { id } = req.params;
		await todoSchema.updateOne({ _id: id }, req.body);
		const todo = await todoSchema.findById(id);
		res.status(201).json({
			message: 'todo updated successfully', data: {
				title: todo.title,
				description: todo.description,
			}
		});
	} catch (error) {
		res.status(500).json({ message: "Error while creating", error: error });
	}
}

export const deleteTodo = async (req, res) => {
	try {
		const { id } = req.params;
		const todo = await todoSchema.findByIdAndDelete(id);
		res.status(201).json({
			message: 'todo deleted successfully'
		});
	} catch (error) {
		res.status(500).json({ message: "Error while creating", error: error });
	}
}

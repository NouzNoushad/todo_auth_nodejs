import jwt from "jsonwebtoken";
import { blackList } from "../controllers/auth_controllers.js";

export const authVerify = (req, res, next) => {
	try {
		const token = req.headers.authorization.split(' ')[1];
		const decode = jwt.verify(token, process.env.SECRET_KEY);
		if (!blackList.has(token)) {
			req.userId = decode.id;
			req.name = decode.name;
			next();
		} {
			res.status(401).json({ message: "You are not authorized"});
		}
	} catch (error) {
		res.status(401).json({ message: "You are not authorized", error: error });
	}
}
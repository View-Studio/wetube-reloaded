import express from "express";
import { edit, remove } from "../controller/userController";

const userRouter = express.Router();

userRouter.get("/edit", edit);
userRouter.get("/delete", remove);

export default userRouter;

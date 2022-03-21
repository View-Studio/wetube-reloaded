import express from "express";
import { trending } from "../controller/videoController";
import { join } from "../controller/userController";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);

export default globalRouter;

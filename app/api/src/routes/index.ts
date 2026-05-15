import { Router } from "express";
import scanRouter from "./scanRouter.js"




const mainRouter = Router();

mainRouter.use("/scan/", scanRouter);


export default mainRouter;
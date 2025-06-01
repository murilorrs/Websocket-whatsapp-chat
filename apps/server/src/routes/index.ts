import express from "express";
import handleCheckServerStatus from "../controllers";

const Routes = express.Router();

Routes.get("/", handleCheckServerStatus);

export default Routes;

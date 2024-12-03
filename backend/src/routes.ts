import { Router } from "express";
import { getNotes } from "./repositories/note";

const routes = Router();

routes.get("/notes", getNotes);

export default routes;

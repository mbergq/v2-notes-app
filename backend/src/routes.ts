import { Router } from "express";
import { getNotes, addNote } from "./repositories/note";

const routes = Router();

routes.get("/notes", getNotes);
routes.post("/add-note", addNote);

export default routes;

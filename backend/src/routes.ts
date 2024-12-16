import { Router } from "express";
import { type AddNote } from "./db/schema";
import { type Request, type Response } from "express";
import {
  getNotes,
  addNote,
  deleteNote,
  getCategories,
} from "./repositories/note";

const routes = Router();

routes.get("/notes", async (req: Request, res: Response) => {
  const categoryId = req.query.categoryId;

  const notes = getNotes(categoryId);
  const categories = getCategories();

  const [notesPromise, categoriesPromise] = await Promise.all([
    notes,
    categories,
  ]);

  return res
    .status(200)
    .json({ notes: notesPromise, categories: categoriesPromise });
});

routes.post("/notes", async (req: Request, res: Response) => {
  const body: AddNote = req.body;
  const insertNote = await addNote(body);

  return res.status(200).json({
    insertNote,
  });
});

routes.delete("/notes/:id", async (req: Request, res: Response) => {
  const noteId = req.params.id;
  const deleteNoteOnId = await deleteNote(noteId);

  return res.status(200).json({ deleteNoteOnId });
});

export default routes;

import { Router } from "express";
import { type AddNote } from "./db/schema";
import { type Request, type Response } from "express";
import { getNotes, addNote, deleteNote } from "./repositories/note";

const routes = Router();

routes.get("/notes", async (req: Request, res: Response) => {
  const categoryId = req.query.categoryId;

  const { notes, categories } = await getNotes(categoryId);

  // return res.status(200).json(
  //   notes.map((note) => ({
  //     id: note.id,
  //     title: note.title,
  //     content: note.content,
  //     color: note.color,
  //     created_at: note.created_at,
  //   }))
  // );
  return res.status(200).json({ notes: notes, categories: categories });
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

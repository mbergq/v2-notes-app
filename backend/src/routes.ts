import { Router } from "express";
import { type Request, type Response } from "express";
import { getNotes, addNote, deleteNote } from "./repositories/note";

const routes = Router();

routes.get("/notes", async (req: Request, res: Response) => {
  const categoryId = req.query.categoryId;

  const notes = await getNotes(categoryId);

  return res.status(200).json(
    notes.map((note) => ({
      id: note.id,
      title: note.title,
      content: note.content,
      color: note.color,
      created_at: note.created_at,
    }))
  );
});

routes.post("/add-note", addNote);

routes.delete("/delete-note", async (req: Request, res: Response) => {
  const noteId = req.body.id;
  const deleteNoteOnId = await deleteNote(noteId);

  return res.status(200).json({ deleteNoteOnId });
});

export default routes;

import { Router } from "express";
import { type Request, type Response } from "express";
import { getNotes, addNote, getNotesOnCategory } from "./repositories/note";

const routes = Router();

routes.get("/notes", async (req: Request, res: Response) => {
  const notes = await getNotes();

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

routes.get("/notes-category/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const notes = await getNotesOnCategory(id);

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

export default routes;

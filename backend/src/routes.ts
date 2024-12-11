import { Router } from "express";
import { type Request, type Response } from "express";
import { getNotes, addNote } from "./repositories/note";

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

export default routes;

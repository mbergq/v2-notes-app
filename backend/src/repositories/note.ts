import { type Request, type Response } from "express";
import { desc } from "drizzle-orm";
import { noteTable } from "../db/schema";
import { db } from "../index";

export const getNotes = async (req: Request, res: Response) => {
  try {
    const notes = await db
      .select({
        id: noteTable.id,
        title: noteTable.title,
        content: noteTable.content,
        color: noteTable.color,
        created_at: noteTable.created_at,
      })
      .from(noteTable)
      .orderBy(desc(noteTable.created_at));

    return res.status(200).json({ notes });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "server_error", message: "Internal server error" });
  }
};

type AddNote = typeof noteTable.$inferInsert;

export const addNote = async (req: Request, res: Response) => {
  const body: AddNote = req.body;
  try {
    await db.insert(noteTable).values(body);
    return res.status(200).json({ message: "Note was succesfully added" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "server_error", message: "Internal server error" });
  }
};

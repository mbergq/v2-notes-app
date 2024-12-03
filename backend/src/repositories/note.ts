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
        background_color_id: noteTable.background_color_id,
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

import { desc, eq } from "drizzle-orm";
import { type AddNote } from "../db/schema";
import { noteTable, categoryTable } from "../db/schema";
import { db } from "../index";

export const getNotes = async (categoryId?: string) => {
  const notesQuery = db
    .select({
      id: noteTable.id,
      title: noteTable.title,
      content: noteTable.content,
      color: noteTable.color,
      created_at: noteTable.created_at,
    })
    .from(noteTable)
    .orderBy(desc(noteTable.created_at));

  if (categoryId) {
    notesQuery.where(eq(noteTable.categoryId, categoryId));
  }

  const result = await notesQuery;

  return result;
};

export const getCategories = async () => {
  const categoryQuery = db
    .select({ id: categoryTable.id, name: categoryTable.name })
    .from(categoryTable);

  const result = await categoryQuery;

  return result;
};

export const addNote = async (noteData: AddNote) => {
  const data = noteData;

  switch (noteData.categoryId) {
    case "shopping":
      const shoppingId = await db
        .select({ id: categoryTable.id })
        .from(categoryTable)
        .where(eq(categoryTable.name, "shopping"));

      data["categoryId"] = shoppingId[0].id;
      break;

    case "to-do":
      const todoId = await db
        .select({ id: categoryTable.id })
        .from(categoryTable)
        .where(eq(categoryTable.name, "to-do"));

      data["categoryId"] = todoId[0].id;
      break;

    case "study":
      const studyId = await db
        .select({ id: categoryTable.id })
        .from(categoryTable)
        .where(eq(categoryTable.name, "study"));

      data["categoryId"] = studyId[0].id;
      break;
  }

  const addNoteQuery = db.insert(noteTable).values(data);

  const result = await addNoteQuery;

  return result;
};

export const deleteNote = async (noteId: string) => {
  const deleteNoteQuery = await db
    .delete(noteTable)
    .where(eq(noteTable.id, noteId));

  const result = await deleteNoteQuery;

  return result;
};

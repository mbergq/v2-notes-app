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

  const categoryQuery = db
    .select({ id: categoryTable.id, name: categoryTable.name })
    .from(categoryTable);

  const notePromise = notesQuery.execute();
  const categoryPromise = categoryQuery.execute();

  const [notes, categories] = await Promise.all([notePromise, categoryPromise]);

  return { notes: notes, categories: categories };
};

// export const getCategories = async () => {
//   const categoryQuery = db
//     .select({ id: categoryTable.id, name: categoryTable.name })
//     .from(categoryTable);
//     return
// }

export const addNote = async (noteData: AddNote) => {
  const addNoteQuery = await db.insert(noteTable).values(noteData);

  return addNoteQuery;
};

export const deleteNote = async (noteId: string) => {
  const deleteNoteQuery = await db
    .delete(noteTable)
    .where(eq(noteTable.id, noteId));

  return deleteNoteQuery;
};

import { pgTable, varchar, uuid, timestamp, pgEnum } from "drizzle-orm/pg-core";

export const categoryEnum = pgEnum("category_names", [
  "shopping",
  "to-do",
  "study",
]);

export const categoryTable = pgTable("category", {
  id: uuid().defaultRandom().primaryKey(),
  name: categoryEnum().unique(),
});

export const colorEnum = pgEnum("color", [
  "green",
  "lightpurple",
  "red",
  "darkpurple",
  "yellow",
]);

export const noteTable = pgTable("note", {
  id: uuid().defaultRandom().primaryKey(),
  title: varchar({ length: 80 }).notNull(),
  content: varchar({ length: 1000 }).notNull(),
  color: colorEnum().notNull(),
  categoryId: uuid("category_id")
    .references(() => categoryTable.id)
    .notNull(),
  created_at: timestamp().defaultNow(),
});

export type AddNote = typeof noteTable.$inferInsert;

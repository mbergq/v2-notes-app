import { pgTable, varchar, uuid, timestamp, pgEnum } from "drizzle-orm/pg-core";

export const categoryEnum = pgEnum("category_names", [
  "shopping",
  "to-do",
  "study",
]);

export const categoryTable = pgTable("category", {
  id: uuid().defaultRandom().primaryKey(),
  name: categoryEnum(),
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
  title: varchar({ length: 80 }).notNull().unique(),
  content: varchar({ length: 1000 }).notNull().unique(),
  color: colorEnum(),
  categoryId: uuid("category_id").references(() => categoryTable.id),
  created_at: timestamp().defaultNow(),
});

import { integer, pgTable, varchar, uuid } from "drizzle-orm/pg-core";

export const noteTable = pgTable("note", {
  id: uuid().defaultRandom().primaryKey(),
  title: varchar({ length: 80 }).notNull().unique(),
  content: varchar({ length: 1000 }).notNull().unique(),
  background_color_id: integer().notNull(),
});


import {
  integer,
  pgTable,
  varchar,
  uuid,
  timestamp,
  pgEnum,
} from "drizzle-orm/pg-core";

const colorsEnum = pgEnum("colors", [
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
  color: colorsEnum(),
  created_at: timestamp().defaultNow(),
});

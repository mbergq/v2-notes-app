CREATE TYPE "public"."color" AS ENUM('green', 'lightpurple', 'red', 'darkpurple', 'yellow');--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "note" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(80) NOT NULL,
	"content" varchar(1000) NOT NULL,
	"color" "color",
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "note_title_unique" UNIQUE("title"),
	CONSTRAINT "note_content_unique" UNIQUE("content")
);

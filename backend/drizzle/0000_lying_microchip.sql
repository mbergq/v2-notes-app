CREATE TYPE "public"."category_names" AS ENUM('shopping', 'to-do', 'study');--> statement-breakpoint
CREATE TYPE "public"."color" AS ENUM('green', 'lightpurple', 'red', 'darkpurple', 'yellow');--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "category" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" "category_names"
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "note" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(80) NOT NULL,
	"content" varchar(1000) NOT NULL,
	"color" "color",
	"category_id" uuid,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "note_title_unique" UNIQUE("title"),
	CONSTRAINT "note_content_unique" UNIQUE("content")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "note" ADD CONSTRAINT "note_category_id_category_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."category"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(80) NOT NULL,
	"content" varchar(1000) NOT NULL,
	"background_color_id" integer NOT NULL,
	CONSTRAINT "users_title_unique" UNIQUE("title"),
	CONSTRAINT "users_content_unique" UNIQUE("content")
);

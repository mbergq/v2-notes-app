ALTER TABLE "users" RENAME TO "note";--> statement-breakpoint
ALTER TABLE "note" DROP CONSTRAINT "users_title_unique";--> statement-breakpoint
ALTER TABLE "note" DROP CONSTRAINT "users_content_unique";--> statement-breakpoint
ALTER TABLE "note" ADD CONSTRAINT "note_title_unique" UNIQUE("title");--> statement-breakpoint
ALTER TABLE "note" ADD CONSTRAINT "note_content_unique" UNIQUE("content");
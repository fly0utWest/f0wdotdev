CREATE TABLE IF NOT EXISTS "projects" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"descriptionru" text NOT NULL,
	"link" text NOT NULL,
	"releasedat" timestamp with time zone DEFAULT now() NOT NULL,
	"screenshot" text NOT NULL
);

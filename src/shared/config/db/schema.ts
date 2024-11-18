import { serial, text, pgTable, integer, timestamp } from 'drizzle-orm/pg-core';

export const projects = pgTable('projects', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description').notNull(),
  descriptionRu: text('descriptionru').notNull(),
  link: text('link').notNull(),
  createdAt: timestamp('releasedat', { withTimezone: true })
    .defaultNow()
    .notNull(),
  screenshot: text('screenshot').notNull(),
});

export const socials = pgTable('socials', {
  id: serial('id').primaryKey(),
  name: text('link').notNull(),
  link: text('name').notNull(),
  icon: text('icon').notNull(),
});

export const tools = pgTable('tools', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  icon: text('icon').notNull(),
  category: text('category').notNull(),
});

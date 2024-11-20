import { InferSelectModel, relations } from 'drizzle-orm';
import { boolean, primaryKey } from 'drizzle-orm/pg-core';
import { serial, text, pgTable, integer, timestamp } from 'drizzle-orm/pg-core';

export const projects = pgTable('projects', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description').notNull(),
  descriptionRu: text('descriptionru').notNull(),
  link: text('link').notNull(),
  releasedAt: timestamp('releasedat', { withTimezone: true })
    .defaultNow()
    .notNull(),
  screenshot: text('screenshot').notNull(),
  listed: boolean('listed').default(true).notNull(),
});

export const projectsRelations = relations(projects, ({ many }) => ({
  tools: many(projectsToTools),
}));

export const socials = pgTable('socials', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  link: text('link').notNull(),
  icon: text('icon').notNull(),
});

export const tools = pgTable('tools', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  icon: text('icon').notNull(),
  link: text('link').notNull(),
  category: text('category').notNull(),
  listed: boolean('listed').default(true).notNull(),
});

export const projectsToTools = pgTable(
  'pt',
  {
    projectId: integer('project_id')
      .notNull()
      .references(() => projects.id),
    toolId: integer('tool_id')
      .notNull()
      .references(() => tools.id),
  },
  (table) => [{ pk: primaryKey({ columns: [table.projectId, table.toolId] }) }],
);

export const toolsToProjectsRelations = relations(
  projectsToTools,
  ({ one }) => ({
    tool: one(tools, {
      fields: [projectsToTools.toolId],
      references: [tools.id],
    }),
    project: one(projects, {
      fields: [projectsToTools.projectId],
      references: [projects.id],
    }),
  }),
);

export type Project = InferSelectModel<typeof projects>;
export type Social = InferSelectModel<typeof socials>;
export type Tool = InferSelectModel<typeof tools>;

export type ProjectWithTools = Project & {
  tools: Tool[];
};

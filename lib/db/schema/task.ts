import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const Task = sqliteTable('task', {
  id: text().primaryKey(),
  title: text().notNull(),
  isCompleted: integer({mode: 'boolean'}).default(false),
  createdAt: integer().default(Date.now()),
  updatedAt: integer().default(Date.now()).$onUpdate(() => Date.now()),
})


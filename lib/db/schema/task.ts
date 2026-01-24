import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { user } from "./auth";

export const Task = sqliteTable('task', {
  id: text().primaryKey(),
  title: text().notNull(),
  isCompleted: integer({mode: 'boolean'}).default(false),
  createdAt: integer().default(Date.now()),
  updatedAt: integer().default(Date.now()).$onUpdate(() => Date.now()),
  userId: text().notNull().references(() => user.id)
})


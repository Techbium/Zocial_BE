import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const textTable = pgTable("test", {
    id: serial("id").primaryKey(),
    username: text("username"),
    message: text("message"),
});


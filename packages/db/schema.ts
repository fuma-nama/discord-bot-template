import { InferModel } from "drizzle-orm";
import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const test = pgTable("Test", {
    id: serial("id").primaryKey().notNull(),
    guildId: text("guild_id").default("").notNull(),
    value: text("value").notNull(),
});

export const musicFeature = pgTable("MusicFeature", {
    guildId: text("guild_id").primaryKey().notNull(),
    controllerRole: text("controller_role"),
});

export const welcomeFeature = pgTable("WelcomeFeature", {
    guildId: text("guild_id").primaryKey().notNull(),
    channelId: text("channel_id"),
    message: text("message").default("Welcome!").notNull(),
});

export const settings = pgTable("Settings", {
    guildId: text("guild_id").primaryKey().notNull(),
    prefix: text("prefix").default("/").notNull(),
});

export const storageFeature = pgTable("StorageFeature", {
    guildId: text("guild_id").primaryKey().notNull(),
});

export type WelcomeFeature = InferModel<typeof welcomeFeature>;
export type StorageFeature = InferModel<typeof storageFeature>;
export type MusicFeature = InferModel<typeof musicFeature>;
export type Settings = InferModel<typeof settings>;
export type Test = InferModel<typeof test>;

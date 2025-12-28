import { pgTable, text, serial, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const requests = pgTable("requests", {
  id: serial("id").primaryKey(),
  businessName: text("business_name").notNull(),
  businessEmail: text("business_email").notNull(),
  phoneNumber: text("phone_number").notNull(),
  businessType: text("business_type").notNull(),
  hasWebsite: boolean("has_website").default(false).notNull(),
  desiredPages: text("desired_pages").notNull(),
  wantsBookingOrForms: boolean("wants_booking_or_forms").default(false).notNull(),
  styleReferences: text("style_references"),
  location: text("location").notNull(),
  specificRequirements: text("specific_requirements"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertRequestSchema = createInsertSchema(requests).omit({
  id: true,
  createdAt: true,
});

export type InsertRequest = z.infer<typeof insertRequestSchema>;
export type Request = typeof requests.$inferSelect;

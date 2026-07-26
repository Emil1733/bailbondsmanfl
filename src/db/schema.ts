import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

export const leads = sqliteTable('leads', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  phone: text('phone').notNull(),
  jailLocation: text('jail_location'),
  inquiryType: text('inquiry_type').default('general_bail'), // e.g., 'warrant_check', 'bail_bond'
  status: text('status').default('new'), // 'new', 'contacted', 'resolved'
  notes: text('notes'),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
});

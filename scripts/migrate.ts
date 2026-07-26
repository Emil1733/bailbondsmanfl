import { migrate } from 'drizzle-orm/libsql/migrator';
import { db } from '../src/db/index';

async function runMigration() {
  console.log("Starting DB Migration...");
  try {
    await migrate(db, { migrationsFolder: './drizzle' });
    console.log("Migration successful!");
  } catch (error) {
    console.error("Migration failed:", error);
  }
  process.exit(0);
}

runMigration();

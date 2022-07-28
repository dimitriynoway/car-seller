import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
    CREATE OR REPLACE FUNCTION on_update_timestamp()
    RETURNS trigger AS $$
    BEGIN
      IF NEW."updatedAt" = OLD."updatedAt" THEN
            NEW."updatedAt" = now();
      END IF;
      RETURN NEW;
    END;
    $$ language 'plpgsql';
  `);
}

export async function down(knex: Knex): Promise<void> {
  await knex.raw('DROP FUNCTION on_update_timestamp');
}

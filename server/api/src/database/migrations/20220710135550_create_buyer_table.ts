import { Knex } from 'knex';
import { onUpdateTrigger } from '../../utils/onUpdateTimestamp';

export async function up(knex: Knex): Promise<void> {
  await knex.schema
    .withSchema('public')
    .createTable('buyer', (table) => {
      table.increments();
      table.string('firm').notNullable();
      table.string('mark').notNullable();
      table.integer('year').notNullable();
      table.integer('power').notNullable();
      table.string('transmission').notNullable();
      table.string('technicalStatus').notNullable();
      table.integer('lowestPrice').notNullable();
      table.integer('highestPrice').notNullable();
      table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updatedAt').defaultTo(knex.fn.now());
    })
    .then(() => knex.raw(onUpdateTrigger('buyer')));
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('buyer');
}

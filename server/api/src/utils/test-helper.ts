import { EntityTarget, getManager } from 'typeorm';

require('dotenv').config();
const knex = require('../database/knex');

beforeAll(async () => {
  await knex.migrate.latest(knex);
  // await knex.seed.run();
});

afterAll(async () => {
  await knex.destroy();
});

let testIndex = 0;
/**
 * @description Get unique incremented test index
 * */
export function getTestIndexIncr(): number {
  // eslint-disable-next-line no-return-assign
  return (testIndex += 1);
}

export const dbStubsBin: [
  string | EntityTarget<any>,
  { [key: string]: string },
][] = [];
/**
 * @description Push record information to bin which will be processed by cleanupDbStubRecords()
 *
 * @param   table     {string | Entity}  Table name
 * @param   criteria  {any}     TypeOrm delete criteria
 * */
export function pushToDbStubsBin<Entity>(
  table: string | EntityTarget<Entity>,
  criteria: { [key: string]: any },
) {
  dbStubsBin.push([table, criteria]);
}

/**
 * @description Remove records stored in dbStubsBin
 * */
export async function cleanupDbStubRecords() {
  const manager = getManager();
  let item: unknown;
  // eslint-disable-next-line no-cond-assign
  while ((item = dbStubsBin.shift())) {
    await manager.delete(item[0], item[1]);
  }
}

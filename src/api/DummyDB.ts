import initSqlJs, { SqlJsStatic, Database, SqlValue } from 'sql.js';
import camelcaseKeys from 'camelcase-keys';

import { localStorageSet, toSnakeCase } from '@/utils';

import schema from './schema.sql?raw';
import seed from './seed.sql?raw';

let SQL: SqlJsStatic;
let db: Database;

async function init() {
  SQL = await initSqlJs({
    // Required to load the wasm binary asynchronously. Of course, you can host it wherever you want
    locateFile: (file) => `https://sql.js.org/dist/${file}`
  });

  // Load a database
  const data = null; // TODO: Use localStorageGet<number[]>('db');

  if (data) {
    db = new SQL.Database(data);
  } else {
    db = new SQL.Database();
    db.run(schema);
    db.run(seed);
  }
}

init();

export function query<T extends Record<string, unknown>>(sql: string): T[] {
  const [res] = db.exec(sql);
  const result = res.values.map((value) => res.columns.reduce((acc, col, i) => ({ ...acc, [col]: value[i] }), {} as T));
  return camelcaseKeys(result, { deep: true }) as T[];
}

export const runParameterizedQuery = <T extends Record<string, SqlValue>>(table: string, data: T) => {
  const keys = Object.keys(data);
  const values = Object.values(data);

  const columns = keys.map((key) => `"${toSnakeCase(key)}"`).join(', ');
  const placeholders = keys.map((key) => `:${key}`).join(', ');

  const queryText = `
    INSERT INTO ${table} (${columns})
    VALUES (${placeholders});
  `;

  const params = keys.reduce(
    (acc, key, index) => {
      acc[`:${key}`] = values[index];
      return acc;
    },
    {} as Record<string, SqlValue>
  );

  const stmt = db.prepare(queryText);
  stmt.run(params);
  stmt.free(); // Free the memory used by the statement
};

export function save() {
  const binaryArray = db.export();
  localStorageSet<number[]>('db', Array.from(binaryArray));
}

export function reset() {
  db.close();
  db = new SQL.Database();
  db.run(schema);
  save();
}

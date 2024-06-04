import initSqlJs, { SqlJsStatic, Database, SqlValue } from 'sql.js';
import camelcaseKeys from 'camelcase-keys';

import {
  generateColumns,
  generatePlaceholders,
  generateSetClause,
  generateWhereClause,
  hashCode,
  localStorageGet,
  localStorageSet,
  mapParams
} from '@/utils';

import schema from './schema.sql?raw';
import seed from './seed.sql?raw';

let SQL: SqlJsStatic;
let db: Database;

async function init() {
  SQL = await initSqlJs({
    // Required to load the wasm binary asynchronously. Of course, you can host it wherever you want
    locateFile: (file) => `https://sql.js.org/dist/${file}`
  });

  const schemaHash = hashCode(schema);
  const storedHash = localStorageGet<number>('schemaHash', undefined);
  const isSchemaChanged = schemaHash !== storedHash;

  // Load a database
  const data = localStorageGet<number[]>('db');

  // Use cached data if schema is not changed
  if (data && !isSchemaChanged) {
    db = new SQL.Database(data);
    return;
  }

  db = new SQL.Database();
  db.run(schema);
  db.run(seed);

  localStorageSet('schemaHash', schemaHash);
  save();
}

init();

export function query<T extends Record<string, unknown>>(sql: string): T[] {
  const [res] = db.exec(sql);
  const result = res.values.map((value) => res.columns.reduce((acc, col, i) => ({ ...acc, [col]: value[i] }), {} as T));
  return camelcaseKeys(result, { deep: true }) as T[];
}

const executeQuery = (queryText: string, params: Record<string, SqlValue>) => {
  const stmt = db.prepare(queryText);
  stmt.run(params);
  stmt.free(); // Free the memory used by the statement
  save();
};

export const insertParameterizedQuery = <T extends Record<string, SqlValue>>(table: string, data: Partial<T>) => {
  const columns = generateColumns(data);
  const placeholders = generatePlaceholders(data);

  const queryText = `
    INSERT INTO ${table} (${columns})
    VALUES (${placeholders});
  `;
  const params = mapParams(data);
  executeQuery(queryText, params);
};

export const updateParameterizedQuery = <T extends Record<string, SqlValue>>(
  table: string,
  data: Partial<T>,
  where: Partial<T>
) => {
  const setClause = generateSetClause(data);
  const whereClause = generateWhereClause(where);

  const queryText = `
    UPDATE ${table}
    SET ${setClause}
    WHERE ${whereClause};
  `;
  const params = {
    ...mapParams(data),
    ...mapParams(where)
  };
  executeQuery(queryText, params);
};

export const deleteParameterizedQuery = <T extends Record<string, SqlValue>>(table: string, where: Partial<T>) => {
  const whereClause = generateWhereClause(where);

  const queryText = `
    DELETE FROM ${table}
    WHERE ${whereClause};
  `;
  const params = mapParams(where);
  executeQuery(queryText, params);
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

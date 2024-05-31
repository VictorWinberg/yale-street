type StorageValue = string | number | boolean | object | bigint;

/**
 * Smartly reads value from localStorage
 */
export function localStorageGet<T extends StorageValue>(name: string, defaultValue?: T): T | undefined {
  const valueFromStore = localStorage.getItem(name);
  if (valueFromStore === null) return defaultValue; // No value in store, return default one

  try {
    const jsonParsed = JSON.parse(valueFromStore);
    if (['string', 'number', 'boolean', 'boolean', 'bigint', 'object'].includes(typeof jsonParsed)) {
      return jsonParsed; // We successfully parse JS value from the store
    }
  } catch (error) {
    throw new Error(`Failed to parse value from localStorage: ${error}`);
  }
}

/**
 * Smartly writes value into localStorage
 */
export function localStorageSet<T extends StorageValue>(name: string, value: T) {
  if (typeof value === 'undefined') {
    return; // Do not store undefined values
  }
  let valueAsString: string;
  if (typeof value === 'object') {
    valueAsString = JSON.stringify(value);
  } else {
    valueAsString = String(value);
  }

  localStorage.setItem(name, valueAsString);
}

/**
 * Deletes value by name from localStorage, if specified name is empty entire localStorage is cleared.
 */
export function localStorageDelete(name: string) {
  if (name) {
    localStorage.removeItem(name);
  } else {
    localStorage.clear();
  }
}

/**
 * Capitalize the first letter of a string
 * @param {string} s - the string to capitalize
 * @returns {string} - the capitalized string
 */
export const capitalize = (s: string): string => s.charAt(0).toUpperCase() + s.substring(1);

/**
 * Convert a string to snake_case
 * @param {string} str - the string to convert
 * @returns {string} - the converted string
 */
export const toSnakeCase = (str: string) => {
  return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
};

/**
 * Generate a random color as #RRGGBB value
 * @returns {string} - the generated color
 */
export function randomColor() {
  const color = Math.floor(Math.random() * 16777215).toString(16);
  return '#' + color;
}

/**
 * Generate a hash code for a string
 * @param {string} str - the string to hash
 * @returns {number} - the hash code
 */
export function hashCode(str: string) {
  let hash = 0,
    i,
    chr;
  if (str.length === 0) return hash;
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}

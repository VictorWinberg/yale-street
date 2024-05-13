/**
 * Capitalize the first letter of a string
 * @param {string} s - the string to capitalize
 * @returns {string} - the capitalized string
 */
export const capitalize = (s: string): string =>
  s.charAt(0).toUpperCase() + s.substring(1);

/**
 * Generate a random color as #RRGGBB value
 * @returns {string} - the generated color
 */
export function randomColor() {
  const color = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + color;
}

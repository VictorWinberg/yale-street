/**
 * Pick the specified keys from the object.
 *
 * @param obj - The object to pick keys from.
 * @param keys - The keys to pick.
 * @returns The object with only the specified keys.
 */
export const pick = <T extends Record<string, unknown>, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> => {
  return keys.reduce(
    (picked, key) => {
      if (key in obj) {
        picked[key] = obj[key];
      }
      return picked;
    },
    {} as Partial<Pick<T, K>>
  ) as Pick<T, K>;
};

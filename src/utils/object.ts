/**
 * Pick keys from object
 * @param obj Object to pick keys from
 * @param keys Keys to pick
 * @returns Object with picked keys
 * @example
 * const obj = { a: 1, b: 2, c: 3 };
 * const picked = pick(obj, ['a', 'b']); // { a: 1, b: 2 }
 */
export function pick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  return keys.reduce(
    (acc, key) => {
      acc[key] = obj[key];
      return acc;
    },
    {} as Pick<T, K>,
  );
}

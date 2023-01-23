interface Value {
  value: number | string | Array | object | boolean | null;
}
interface Predicate {
  value: string;
  index: number;
  array: Array;
}

interface iteratee {
  index: number;
  array: Array;
}

declare module "lodash" {
  function head(array: Array<T>): T;
  function hasIn(object: object, key: string): boolean;
  function isBoolean(value: boolean): boolean;
  function toString(value: Value): string;
  function split(string: string, separator: string, limit: number): Array<>;
  function hasPath(object: object, path: string): boolean;
  function filter(array: Array<T>, predicate: Predicate): Array<T>;
  function every(array: Array<T>, predicate: Predicate): boolean;
  function map(array: Array<T>, iteratee: Iteratee): Array<T>;
}

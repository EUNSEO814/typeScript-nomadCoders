// type Last = {
//   <T>(arr: T[]): T;
// };

// const last: Last = (arr) => {
//   return arr[arr.length - 1];
// };
// const a = last([1, 2, 3]);
// const b = last(["a", "b", "c"]);

// type Prepend = {
//   <T>(arr: T[], item: T): T[];
// };
// const prepend: Prepend = (arr, item) => {
//   const items = [...arr]
//   return [item, ...items];
// };

// const c = prepend([1, 2, 3], "x");
// const d = prepend([true, false, true], 1);
// const e = prepend(["a", "b", "c"], false);
// const f = prepend([1, 2, true, false, "hello"], []);

// 수정본

type Last = <T>(arr: T[]) => T;

const last: Last = (arr) => {
  return arr[arr.length - 1];
};
const a = last([1, 2, 3]);
const b = last(["a", "b", "c"]);

type Prepend = <T>(arr: T[], item: T) => T[];

const prepend: Prepend = (arr, item) => {
  const items = [...arr];
  return [item, ...items];
};

const c = prepend([1, 2, 3], 4);
const d = prepend([true, false, true], true);
const e = prepend(["a", "b", "c"], "d");

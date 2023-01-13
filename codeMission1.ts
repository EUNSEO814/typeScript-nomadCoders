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

type Last1 = <T>(arr: T[]) => T;

const last1: Last1 = (arr) => {
  return arr[arr.length - 1];
};
const a = last1([1, 2, 3]);
const b = last1(["a", "b", "c"]);

type Prepend1 = <T>(arr: T[], item: T) => T[];

const prepend1: Prepend1 = (arr, item) => {
  const items = [...arr];
  return [item, ...items];
};

const c = prepend1([1, 2, 3], 4);
const d = prepend1([true, false, true], true);
const e = prepend1(["a", "b", "c"], "d");

//답
// Last

type Last = <T>(items: T[]) => T;

const last: Last = (items) => items[items.length - 1];

const lastItem = last([1, 2, 3, 4, 5]);

console.log(lastItem);

// Prepend

type Prepend = <T>(items: T[], item: T) => T[];

const prepend: Prepend = (items, item) => [item, ...items];

const items = [1, 2, 3, 4, 5];

const newItems = prepend(items, 0);

console.log(newItems);

//첫번째 제출 버전. 하나의 type으로 같이 쓰고 싶은데 아직 잘 모르겠음,, ㅠ

type Print = {
  <T>(arr: T[]): T;
};

const last: Print = (arr) => {
  return arr[arr.length - 1];
};
const a = last([1, 2, 3]);
const b = last(["a", "b", "c"]);

type Print2 = {
  <T, M>(arr: T[], item?: M): (T | M | undefined)[];
};
const prepend: Print2 = (arr, item) => {
  return [item, ...arr];
};

const c = prepend([1, 2, 3], "x");
const d = prepend([true, false, true], 1);
const e = prepend(["a", "b", "c"], false);
const f = prepend([1, 2, true, false, "hello"], []);

// JSDoc 파일들의 주석 부분들을 타입스크립트 타입 정의로 바꾸는 것

// 1. head
/**
 * Gets the first element of `array`.
 *
 * @since 0.1.0
 * @alias first
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the first element of `array`.
 * @see last
 * @example
 *
 * head([1, 2, 3])
 * // => 1
 *
 * head([])
 * // => undefined
 */
function head(array) {
  return array != null && array.length ? array[0] : undefined;
}

export default head;

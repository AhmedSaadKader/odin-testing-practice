export default function calculator(n1, n2) {
  const add = function (n1, n2) {
    return n1 + n2;
  };
  const subtract = function (n1, n2) {
    return n1 - n2;
  };
  const divide = function (n1, n2) {
    return n1 / n2;
  };
  const multiply = function (n1, n2) {
    return n1 * n2;
  };
  return {
    add,
    subtract,
    divide,
    multiply,
  };
}

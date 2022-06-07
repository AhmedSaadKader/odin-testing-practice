export default class Calculator {
  add(n1, n2) {
    if (isNaN(n1) || isNaN(n2)) {
      return "Please enter numbers";
    } else {
      return n1 + n2;
    }
  }
}

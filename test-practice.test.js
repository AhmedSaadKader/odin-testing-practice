import capitalize from "./capitalize";
import reverseString from "./reverse-string";
import Calculator from "./calculator";
import calculator from "./calculator-factory";
import caesarCipher from "./caesar-cipher";
import averageNumber from "./analyze-array";
import analyzeArray from "./analyze-array";

it("capitalizes first letter", () => expect(capitalize("ahmed")).toBe("Ahmed"));

it("reverses strings", () => expect(reverseString("ahmed")).toBe("demha"));

it("calculator", () => {
  const calculator = new Calculator();
  expect(calculator.add(1, 2)).toBe(3);
});

it("calculator", () => {
  const calculators = new Calculator();
  expect(calculators.add("s", 2)).toBe("Please enter numbers");
});

it("calculator factory", () => {
  const calculator2 = calculator();
  expect(calculator2.subtract(1, 2)).toBe(-1);
});

it("calculator factory", () => {
  const calculator2 = calculator();
  expect(calculator2.multiply(1, 2)).toBe(2);
});

it("calculator factory", () => {
  const calculator2 = calculator();
  expect(calculator2.divide(1, 2)).toBe(0.5);
});

it("calculator factory", () => {
  const calculator2 = calculator();
  expect(calculator2.add(1, 2)).toBe(3);
});

it("caesar cipher", () => {
  const caesarCipherTest = caesarCipher();
  expect(caesarCipherTest.encode("ahmed", 1)).toBe("binfe");
});

it("caesar cipher Case", () => {
  const caesarCipherTest = caesarCipher();
  expect(caesarCipherTest.encode("Ahmed", 1)).toBe("Binfe");
});

it("caesar cipher Punctuation", () => {
  const caesarCipherTest = caesarCipher();
  expect(caesarCipherTest.encode("ahmed?!", 1)).toBe("binfe?!");
});

it("analyze array", () => {
  expect(analyzeArray([1, 2])).toStrictEqual({
    average: 1.5,
    min: 1,
    max: 2,
    length: 2,
  });
});

export default function analyzeArray(arr) {
  const averageNumber = arr.reduce((a, b) => a + b, 0) / arr.length;
  const minimumNumber = Math.min(...arr);
  const maximumNumber = Math.max(...arr);
  const arrLength = arr.length;
  return {
    average: averageNumber,
    min: minimumNumber,
    max: maximumNumber,
    length: arrLength,
  };
}

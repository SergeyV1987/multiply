module.exports = function multiply(first, second) {
  let firstArray = first.split('').reverse();
  let secondArray = second.split('').reverse();
  let result = [];

  for (let i = 0; i < firstArray.length; i++) {
    for (let j = 0; j < secondArray.length; j++) {
      let m = firstArray[i] * secondArray[j];
      result[i + j] = (result[i + j]) ? result[i + j] + m : m;
    }
  }

  for (let i = 0; i < result.length; i++) {
    let num = result[i] % 10;
    let up = Math.floor(result[i] / 10);
    result[i] = num;
    if (result[i + 1]) {
      result[i + 1] += up;
    } else if (up != 0) {
      result[i + 1] = up;
    }
  }

  return result.reverse().join('');
}

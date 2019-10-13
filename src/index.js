module.exports = function multiply(num1, num2) {

  num1 = num1.split('').reverse();
  num2 = num2.split('').reverse();
  let result = [];

  for (let i = 0; num1[i] >= 0; i++) {
    for (let j = 0; num2[j] >= 0; j++) {
      if (!result[i + j]) {
        result[i + j] = 0;
      }

      result[i + j] += num1[i] * num2[j];
    }
  }

  for (let i = 0; result[i] >= 0; i++) {
    if (result[i] >= 10) {
      if (!result[i + 1]) {
        result[i + 1] = 0;
      }

      result[i + 1] += parseInt(result[i] / 10);
      result[i] %= 10;
    }
  }

  return result.reverse().join('');
}

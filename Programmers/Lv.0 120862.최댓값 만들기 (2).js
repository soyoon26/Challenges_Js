function solution(numbers) {
  var answer = 0;
  numbers.sort((a, b) => a - b);
  l = numbers.length;
  if (numbers[l - 1] * numbers[l - 2] >= numbers[0] * numbers[1]) {
    answer = numbers[l - 1] * numbers[l - 2];
  } else {
    answer = numbers[0] * numbers[1];
  }
  return answer;
}

function solution(numbers) {
  numbers.sort((a, b) => a - b);
  return Math.max(
    numbers[0] * numbers[1],
    numbers[numbers.length - 1] * numbers[numbers.length - 2]
  );
}

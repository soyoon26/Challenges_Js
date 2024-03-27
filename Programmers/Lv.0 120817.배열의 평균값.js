function solution(numbers) {
  var sum = 0;
  for (var num of numbers) {
    sum += num;
  }
  var answer = sum / numbers.length;

  return answer;
}

//var answer = numbers.reduce((a,b) => a+b, 0) / numbers.length;
//a는 초기값, b는 배열요소

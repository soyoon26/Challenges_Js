function solution(n) {
  var answer = 0;
  for (var i = 1; i < n; i++) {
    if (n % i == 1) {
      answer = i;
      break;
    }
  }
  return answer;
}

//while 사용하기 조건으로 x++
function solution(n, x = 1) {
  while (x++) {
    if (n % x === 1) {
      return x;
    }
  }
}

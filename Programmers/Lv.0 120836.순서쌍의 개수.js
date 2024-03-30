function solution(n) {
  var answer = 0;
  for (var i = 1; i < Math.floor(Math.sqrt(n)) + 1; i++) {
    if (n % i == 0) {
      if (Math.pow(i, 2) == n) {
        answer += 1;
      } else {
        answer += 2;
      }
    }
  }

  return answer;
}

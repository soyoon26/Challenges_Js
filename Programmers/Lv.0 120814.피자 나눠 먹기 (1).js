function solution(n) {
  var answer = 0;
  if (n % 7) {
    answer = Math.floor(n / 7) + 1;
  } else {
    answer = n / 7;
  }
  return answer;
}

// 더 간단하고 편한 방법
function solution(n) {
  return Math.ceil(n / 7);
}

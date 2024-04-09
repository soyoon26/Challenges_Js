function solution(a, b) {
  var answer = 0;
  if (a > b) {
    var temp;
    temp = a;
    a = b;
    b = temp;
  }
  console.log(a, b);
  for (a; a <= b; a++) {
    answer += a;
  }
  return answer;
}

// 가우스의 재림
((a + b) * (Math.abs(a - b) + 1)) / 2;
// (제일 작은 값 + 제일 큰 값)*(수의 갯수) / 2

// (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
// Math.abs는 절대값, Math.min으니 최소값

function solution(n) {
  n = String(n);
  var arr = n.split("");
  arr = arr.reverse();
  var answer = arr.map((num) => Number(num));
  return answer;
}

//짧게 표현
return (n + "")
  .split("")
  .reverse()
  .map((v) => parseInt(v));

// 10으로 계속 나누어 나머지를 배열에 push
do {
  arr.push(n % 10);
  n = Math.floor(n / 10);
} while (n > 0);

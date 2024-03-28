function solution(n) {
  var answer = 0;
  n = String(n);

  for (i of n.split("")) {
    answer += Number(i);
  }
  return answer;
}

function solution(n) {
  return n
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0); //각 원소에 대한 함수 실행, 초기값 0 지정
}

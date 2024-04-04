function solution(x, n) {
  var answer = [];
  for (var i = 1; i <= n; i++) {
    answer.push(i * x);
  }
  return answer;
}

//다른 방법
function soulution(x, n) {
  return Array(n) //길이가 n인 배열 생성
    .fill(x) //배열의 모든 요소를 x로 채움
    .map((v, i) => (i + 1) * v); //v는 요소의 값, i는 index, 각 요소에 대해 함수 실행
}

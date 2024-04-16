function solution(hp) {
  var answer = 0;
  ant = [5, 3, 1];
  for (var i = 0; i < 3; i++) {
    answer += Math.floor(hp / ant[i]);
    hp = hp % ant[i];
  }
  return answer;
}
// 짧게 만들기
function solution(hp) {
  return Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + ((hp % 5) % 3);
}

function solution(money) {
  const cnt = Math.floor(money / 5500);
  const remain = money % 5500;
  var answer = [cnt, remain];
  return answer;
}

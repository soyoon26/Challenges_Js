function solution(num1, num2) {
  var num = (num1 / num2) * 1000;
  var answer = Math.floor(num);
  return answer;
}

//truc, parseInt는 소수점 이하는 다 버림
//floor은 밑으로 내림

function solution(num) {
  var answer = "";
  if (num % 2) {
    answer = "Odd";
  } else {
    answer = "Even";
  }
  return answer;
}

//return 에 바로 사용 가능
return num % 2 ? "Odd" : "Even";

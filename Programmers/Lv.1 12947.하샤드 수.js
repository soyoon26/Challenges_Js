function solution(x) {
  var string_x = String(x).split("");
  var sum = string_x.reduce((acc, cur) => {
    return acc + Number(cur);
  }, 0);
  var answer = true;

  if (x % sum) {
    answer = false;
  }
  return answer;
}

// 10 나누기로 각 자릿수의 합 구하기
function solution(x) {
  let num = x;
  let sum = 0;
  do {
    sum += x % 10; //10으로 나눈 후의 나머지
    x = Math.floor(x / 10); //10으로 나누고 소수점을 버리기
  } while (x > 0);

  return !(num % sum);
}

function solution(n, numlist) {
  var answer = [];
  numlist.forEach((el) => {
    if (el % n == 0) {
      answer.push(el);
    }
  });

  return answer;
}

// filter 사용
function solution(n, numlist) {
  return numlist.filter((num) => num % n === 0);
}

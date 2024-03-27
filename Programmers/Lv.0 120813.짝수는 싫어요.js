function solution(n) {
  var answer = [];
  let i = 1;
  while (i <= n) {
    answer.push(i);
    i += 2;
  }
  return answer;
}

//for (let i = 1; i<=n; i+=2) answer.push(i)

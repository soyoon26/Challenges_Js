function solution(n) {
  var answer = 0;
  if (Math.sqrt(n) % 1) {
    answer = -1;
  } else {
    answer = Math.pow(Math.sqrt(n) + 1, 2);
  }

  return answer;
}

// Math.pow() 제곱 , Math.sqrt() 제곱근, **2도 가능

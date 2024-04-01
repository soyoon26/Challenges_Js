function solution(arr) {
  var answer = 0;
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  answer = answer / arr.length;
  return answer;
}

//reduce 사용
function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

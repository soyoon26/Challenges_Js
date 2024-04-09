function solution(n) {
  var arr = n.toString().split("");
  var answer = arr.sort((a, b) => b - a);
  return parseInt(answer.join(""));
}

function solution(n) {
  const newN = n + ""; // number+string => string, string*number => number
  const newArr = newN.split("").sort().reverse().join("");

  return +newArr;
} // +를 통해 문자형으로 바꾸고 나눠서 정렬하고 뒤집기

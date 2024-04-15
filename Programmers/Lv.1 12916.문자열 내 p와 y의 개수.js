function solution(s) {
  var answer = true;
  s = s.toLowerCase();
  var p = s.split("p").length - 1;
  var y = s.split("y").length - 1;
  if (p != y) {
    answer = false;
  }

  return answer;
}

// reduce 사용: 초기값, 원소
function solution(s) {
  return [...s.toLowerCase()].reduce((acc, cur) => {
    if (cur === "p") return acc + 1;
    else if (cur === "y") return acc - 1;
    return acc;
  }, 0)
    ? false
    : true;
}

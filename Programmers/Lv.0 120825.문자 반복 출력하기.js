function solution(my_string, n) {
  var answer = "";
  for (let i = 0; i < my_string.length; i++) {
    answer += my_string[i].repeat(n);
  }
  return answer;
}

//다른 풀이 방법
function solution(my_string, n) {
  let ans = "";
  for (let s of my_string) ans += s.repeat(n); //for of 사용 for in 은 key 사용 가능
  return ans;
}

function solution(my_string, n) {
  var answer = [...my_string].map((v) => v.repeat(n)).join("");
  console.log(answer);
  return answer;
} //map사용, 배열의 각 요소

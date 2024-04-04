function solution(answers) {
  var answer = [];
  stu1 = [1, 2, 3, 4, 5];
  stu2 = [2, 1, 2, 3, 2, 4, 2, 5];
  stu3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  var score = [0, 0, 0];
  const al = answers.length;
  for (var i = 0; i < al; i++) {
    if (answers[i] == stu1[i % 5]) {
      score[0] += 1;
    }
    if (answers[i] == stu2[i % 8]) {
      score[1] += 1;
    }
    if (answers[i] == stu3[i % 10]) {
      score[2] += 1;
    }
  }
  var max = Math.max(...score);
  score.forEach((value, index) => {
    value == max && answer.push(index + 1);
  });
  return answer;
}

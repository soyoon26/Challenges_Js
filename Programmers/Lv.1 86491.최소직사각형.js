function solution(sizes) {
  const rotated = sizes.map(([w, h]) => (w > h ? [w, h] : [h, w]));

  let max = [0, 0];
  rotated.forEach(([w, h]) => {
    if (w > max[0]) {
      max[0] = w;
    }
    if (h > max[1]) {
      max[1] = h;
    }
  });
  return max[0] * max[1];
}

// 원래 풀었던 방법
function solution(sizes) {
  var w = 0;
  var h = 0;
  for (var i = 0; i < sizes.length; i++) {
    if (sizes[i][1] > sizes[i][0]) {
      var temp = sizes[i][1];
      sizes[i][1] = sizes[i][0];
      sizes[i][0] = temp;
    }
    if (sizes[i][0] > w) {
      w = sizes[i][0];
    }
    if (sizes[i][1] > h) {
      h = sizes[i][1];
    }
  }
  return w * h;
}

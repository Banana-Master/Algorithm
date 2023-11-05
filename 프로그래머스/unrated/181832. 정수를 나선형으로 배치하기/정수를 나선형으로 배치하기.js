function solution(n) {
  const result = new Array(n).fill().map(() => new Array(n).fill(0));
  let num = 1;
  let top = 0, bottom = n - 1, left = 0, right = n - 1;

  while (num <= n * n) {
    for (let i = left; i <= right; i++) {
      result[top][i] = num;
      num++;
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      result[i][right] = num;
      num++;
    }
    right--;

    for (let i = right; i >= left; i--) {
      result[bottom][i] = num;
      num++;
    }
    bottom--;

    for (let i = bottom; i >= top; i--) {
      result[i][left] = num;
      num++;
    }
    left++;
  }

  return result;
}
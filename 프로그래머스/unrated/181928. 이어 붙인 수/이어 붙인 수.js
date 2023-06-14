function solution(num_list) {
  let num1 = '';
  let num2 = '';
  num_list.reduce((_, x) => {
    if (x % 2 === 1) {
      num1 += x;
    } else {
      num2 += x;
    }
  }, 0);
  return Number(num1) + Number(num2);
}

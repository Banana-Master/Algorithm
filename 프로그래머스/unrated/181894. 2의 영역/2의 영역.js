function solution(arr) {
  let first = arr.indexOf(2);
  if (first === -1) {
    return [-1];
  } else {
    const lastTwoIndex = (first) => {
      let last = 0;
      while (first !== -1) {
        last = first;
        first = arr.indexOf(2, first + 1);
      }
      return last;
    };
    const last = lastTwoIndex(first);
    return arr.slice(first, last + 1);
  }
}

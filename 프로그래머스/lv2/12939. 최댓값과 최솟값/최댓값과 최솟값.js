function solution(s) {
  let a = s.split(' ')
  a = a.sort((x, y) => x - y)
  let answer = a[0] + ' ' + a[a.length-1]
  return answer;
}

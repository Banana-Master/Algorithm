function solution(emergency) {
  let arr = emergency.slice().sort((x, y) => y - x); 
  return emergency.map((e) => arr.indexOf(e) + 1);
}

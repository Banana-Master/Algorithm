function solution(myString, pat) {
  const result = myString.lastIndexOf(pat);
  return myString.slice(0, result + pat.length);
}

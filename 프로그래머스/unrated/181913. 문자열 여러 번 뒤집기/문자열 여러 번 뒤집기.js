function solution(my_string, queries) {
  var answer = my_string;

  for (let i = 0; i < queries.length; i++) {
    let query = queries[i];
    let start = query[0];
    let end = query[1];

    let substring = answer.slice(start, end + 1);
    let reversedSubstring = substring.split('').reverse().join('');
    answer = answer.slice(0, start) + reversedSubstring + answer.slice(end + 1);
  }

  return answer;
}

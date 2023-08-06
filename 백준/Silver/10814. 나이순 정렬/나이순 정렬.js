const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let n = 0;
let list1 = [];

rl.on('line', function (line) {
  if (n == 0) {
    n = Number(line);
  } else {
    list1.push(line);
    if (list1.length === n) {
      console.log(ageSort(list1));
      process.exit();
    }
  }
});

const ageSort = (list1) => {
    let people = {}
    list1.forEach((x) => {
        let person = x.split(' ');
        let age = person[0];
        let name = person[1];
        if(people[age] === undefined) {
            people[age] = [];
        }
        people[age].push(name);
    });
    let keySort = Object.keys(people).sort((x, y) => Number(x) - Number(y));
    let sort = [];
    keySort.forEach((age) => {
        people[age].forEach((name) => {
            sort.push(`${age} ${name}`)
        })
    })
    return sort.join('\n');
};
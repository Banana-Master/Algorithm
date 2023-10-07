const solution = (input) => {
  const arr = [];
  arr.push(`어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.`);
  for (let i = 0; i <= input; i++) {
    arr.push(`${"____".repeat(i)}"재귀함수가 뭔가요?"`);
    if (i === input) {
      arr.push(`${"____".repeat(i)}"재귀함수는 자기 자신을 호출하는 함수라네"`);
    } else {
      arr.push(
        `${"____".repeat(
          i
        )}"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.`
      );
      arr.push(
        `${"____".repeat(
          i
        )}마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.`
      );
      arr.push(
        `${"____".repeat(
          i
        )}그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."`
      );
    }
  }
  for(let i = input; i >= 0; i--) {
    arr.push(`${'____'.repeat(i)}라고 답변하였지.`)
  }
  return arr.join("\n");
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;

rl.on("line", function (line) {
  count = +line;
  rl.close();
}).on("close", function () {
  console.log(solution(count));
  process.exit();
});

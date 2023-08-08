let visit = [];
const graph = {};

const solution = (input) => {
    for(let i = 1; i <= N; i++) {
        graph[i] = [];
        visit.push(false);
    }
    input.forEach((x) => {
        let a = x[0];
        let b = x[1];
        graph[a].push(b);
        graph[b].push(a);
    });
    let count = 0;
    for(let i = 1; i <= N; i++) {
        if(!visit[i]) {
            count++;
            DFS(i);
        }
    }
    return count;
}

const DFS = (x) => {
    if(visit[x]) {
        return;
    }
    visit[x] = true;
    for(let j = 0; j < graph[x].length; j++) {
        let nextNode = graph[x][j];
        if(!visit[nextNode]) {
            DFS(nextNode);
        }
    }
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let list = [];
let N = 0;
let M = 0;
rl.on("line", function (line) {
    if (M === 0) {
        N = Number(line.split(' ')[0]);
        M = Number(line.split(' ')[1]);
    } else {
        list.push(line.split(' ').map(Number));
    }
    if (M === list.length) {
        rl.close();
    }
}).on("close", function () {
    console.log(solution(list));
    process.exit();
});

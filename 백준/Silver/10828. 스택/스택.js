let arr = [];

const push = (x) => {
    arr.push(Number(x));
}
const pop = () => {
    if(arr.length === 0) {
        return -1;
    } else {
        return arr.pop();
    }
}
const size = () => {
    return arr.length
}
const empty = () => {
    return arr.length === 0 ? 1 : 0;
}
const top = () => {
    if(arr.length === 0) {
        return -1;
    } else {
        return arr[arr.length -1];
    }
}
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let list = [];
let count = 0;
rl.on("line", function (line) {
    if (count === 0) {
        count = Number(line);
    } else {
        list.push(line);
    }
    if (list.length === count) {
        rl.close();
    }
}).on("close", function () {

    console.log(solution(list));
    process.exit();
});

const solution = (list) => {
    let result = '';
    list.forEach((x) => {
        switch (x.split(' ')[0]) {
            case 'push':
                push(x.split(' ')[1]);
                break;
            case 'pop':
                result += pop() + '\n';
            break;
            case 'size':
                result += size() + '\n';
            break;
            case 'empty':
                result += empty() + '\n';
            break;
            case 'top':
                result += top() + '\n';
            break;
        }
    });
    return result;

}
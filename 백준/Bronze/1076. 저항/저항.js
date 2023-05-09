const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const color = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9
};

const resister = (color1, color2, color3) => {
    let add = color[color1] + '' + color[color2];
    let mul = Math.pow(10, color[color3]);
    return Number(add) * mul;
}

console.log(resister(input[0], input[1], input[2]));
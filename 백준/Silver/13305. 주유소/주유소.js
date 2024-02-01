const solution = (road, price) => {
  const resultSort = priceSort(price);
  let result = 0;
  for(let i = 0; i < road.length; i++) {
    result += road[i] * resultSort[i];
  }
  return result;
};

const priceSort = (price) => {
  let min = Infinity;
  const newPrice = [];
  for (let i = 0; i < price.length; i++) {
    if (min > price[i]) {
      min = price[i];
    }
    newPrice.push(min);
  }
  return newPrice;
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = 0;
let road = [];
let price = [];

rl.on("line", function (line) {
  if (N === 0) {
    N = +line;
  } else if (road.length === 0) {
    road = line.split(" ").map(Number);
  } else if (price.length === 0) {
    price = line.split(" ").map(Number);
  }
  if (price.length === N) rl.close();
}).on("close", function () {
  console.log(solution(road, price));
  process.exit();
});

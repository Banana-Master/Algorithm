function solution(balls, share) {
  let a = BigInt(1);
  let x = BigInt(1);
  let y = BigInt(1);
  for (let i = BigInt(2); i <= BigInt(balls); i++) {
    a *= i;
  }
  for (let i = BigInt(2); i <= BigInt(balls - share); i++) {
    x *= i;
  }
  for (let i = BigInt(2); i <= BigInt(share); i++) {
    y *= i;
  }
  let b = x * y;
  return a / b;
}

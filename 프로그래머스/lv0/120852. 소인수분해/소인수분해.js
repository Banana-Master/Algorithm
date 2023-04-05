const solution = (n) => {
    let result = [];
    for(let i = 2; i <= n;) {
        if(n % i === 0) {
            result.push(i);
            n /= i;
            i = 2;
        } else {
            i++;
        }
    }
    return [... new Set(result)];
}

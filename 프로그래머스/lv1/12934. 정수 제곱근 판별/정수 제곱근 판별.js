const solution = (n) => {
    let x = 1
    while(Math.pow(x, 2) <= n) {
        x++
    }
    return Math.pow(x-1, 2) == n ? Math.pow(x, 2) : -1
}
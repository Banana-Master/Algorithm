const solution = (n) => {
    let count = 0;
    for(let i = 1; i <= n; i++) {
        count++;
        while(count % 3 == 0 || (count+'').includes('3')) { 
            count++;
        }
    }
    return count;
}
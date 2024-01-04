process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const [a, b] = data.split(" ");
    const arr = [];
    const star = "*".repeat(a);
    for(let i = 0; i < b; i++) {
        arr.push(star);
    }
    console.log(arr.join('\n'));
});
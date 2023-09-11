function solution(myStr) {
    const a = myStr.split('a').filter((x) => x !== "");
    const b = [];
    a.forEach((x) => {
        x.split('b').forEach((y) => {
            if(y !== "") { b.push(y) }
        })
    });
    const c = [];
    b.forEach((x) => {
        x.split('c').forEach((y) => {
            if(y !== "") { c.push(y) }
        })
    });
    return c.length > 0 ? c : ["EMPTY"];
}
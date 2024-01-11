function solution(s) {
    const location = {};
    const result = [];
    [...s].forEach((x, i) => {
       if(location[x] === undefined) {
           location[x] = i;
           result.push(-1);
       } else {
           result.push(i - location[x]);
           location[x] = i;
       }
    });
    return result;
}
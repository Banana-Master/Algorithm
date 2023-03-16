function solution(n, numlist) {
    for(let i = 0; i < numlist.length; i++) {
        if(numlist[i] % n != 0) {
            numlist.splice(i, 1);
            i--;
        }
    }
    return numlist;
}
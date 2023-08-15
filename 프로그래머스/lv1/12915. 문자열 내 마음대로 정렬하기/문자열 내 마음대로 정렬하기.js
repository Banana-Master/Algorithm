function solution(strings, n) {
    strings.sort((x, y) => {
        const charX = x[n];
        const charY = y[n];
        
        if (charX === charY) {
            return x.localeCompare(y);
        }
        
        return charX.localeCompare(charY);
    });
    
    return strings;
}
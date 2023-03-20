function solution(id_pw, db) {
    let result = 'fail'
    for(let i = 0; i < db.length; i++) {
        if(id_pw[0] == db[i][0]) {
            if(id_pw[1] == db[i][1]) {
                result = 'login'
            } else {
                result = 'wrong pw'
            }
            break;
        }
    }
    
    
    return result;
}
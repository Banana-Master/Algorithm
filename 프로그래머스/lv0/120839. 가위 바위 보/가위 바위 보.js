function solution(rsp) {
    answer = ""
    let result = rsp.split("")
    for(let i = 0; i < result.length; i++) {
        if(result[i] == "2") {
            answer += "0"
        } else if(result[i] == "0") {
            answer += 5
        } else if(result[i] == "5") {
            answer += "2"
        }
    }
    
    return answer;
}
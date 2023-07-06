function solution(my_strings, parts) {
    let result = "";
    
    for (let i = 0; i < my_strings.length; i++) {
        let str = my_strings[i];
        const [start, end] = parts[i];
    
        // 부분 문자열을 찾아서 대체합니다.
        const part = str.substring(start, end + 1);
        result += part;
    }
  
    // 모든 문자열을 이어 붙여서 반환합니다.
    return result;
}
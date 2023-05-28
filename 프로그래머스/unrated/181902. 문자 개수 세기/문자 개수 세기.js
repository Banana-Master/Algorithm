function solution(my_string) {
    const alphabet = {};
    // 대문자
    for (let i = 65; i <= 90; i++) {
        const letter = String.fromCharCode(i);
        alphabet[letter] = 0;
    }
    // 소문자
    for (let i = 97; i <= 122; i++) {
        const letter = String.fromCharCode(i);
        alphabet[letter] = 0;
    }
    // 비교
    for(let i = 0; i < my_string.length; i++) {
        if (alphabet.hasOwnProperty(my_string[i]) ) {
            alphabet[my_string[i]]++;
        }
    }
    return Object.values(alphabet);
}

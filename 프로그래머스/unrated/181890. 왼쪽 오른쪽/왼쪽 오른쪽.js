function solution(str_list) {
    let result = [];

    // l, r의 인덱스번호
    let lIndex = -1;
    let rIndex = -1;

    // l or r 찾기
    for (let i = 0; i < str_list.length; i++) {
        if (str_list[i] === "l") {
            lIndex = i;
            break;
        }
        if (str_list[i] === "r") {
            rIndex = i;
            break;
        }
    }

    // l이 먼저 나온 경우
    if (lIndex !== -1) {
        result = str_list.slice(0, lIndex);
    }
    // r이 먼저 나온 경우
    else if (rIndex !== -1) {
        result = str_list.slice(rIndex + 1);
    }

    return result;
}
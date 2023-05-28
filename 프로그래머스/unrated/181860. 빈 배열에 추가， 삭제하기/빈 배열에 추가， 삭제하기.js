function solution(arr, flag) {
    // 빈 배열 X
    let result = [];
    // flag를 차례대로 순회
    for(let i = 0; i < arr.length; i++) {
        if(flag[i]) {
            // X의 뒤에 arr[i]를 arr[i] × 2 번 추가
            for(let j = 0; j < arr[i]*2; j++) {
                result.push(arr[i]);
            }
        } else {
            // X에서 마지막 arr[i]개의 원소를 제거
            for(let j = 0; j < arr[i]; j++) {
                result.pop();
            }
        }
        // console.log(i + " : " + result);
    }
    return result;
}
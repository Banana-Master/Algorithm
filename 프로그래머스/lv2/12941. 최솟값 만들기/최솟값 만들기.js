function solution(A,B){
    A = A.sort((x, y) => x - y)
    B = B.sort((x, y) => y - x)
    let result = 0
    for(let i in A) {
        result += A[i] * B[i]
    }

    return result;
}
function solution(a, b) {
    const day = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let date = 4;
    const 요일 = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    for(let i = 0; i < a -1; i++) {
        date += day[i];
    }
    date += b;
    return 요일[date % 7];
}
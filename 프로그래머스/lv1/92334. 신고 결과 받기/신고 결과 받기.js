function solution(id_list, report, k) {
    const obj = {};
    report.forEach((x) => {
        const 신고자 = x.split(' ')[0];
        const 불량이용자 = x.split(' ')[1];
        if(obj[신고자] === undefined) {
            obj[신고자] = new Set();
        }
        obj[신고자].add(불량이용자);
    })
    const 신고누적 = {};
    Object.values(obj).forEach((x) => {
        x.forEach((y) => {
            if(신고누적[y] === undefined) {
                신고누적[y] = 0;
            }
            신고누적[y]++;
        })
    })
    const k번이상신고 = Object.keys(신고누적).filter((x) => 신고누적[x] >= k);
    const result = id_list.map((id) => {
        if(obj[id] === undefined) return 0;
        return [...obj[id]].filter((x) => k번이상신고.includes(x)).length;
    })
    return result;
}

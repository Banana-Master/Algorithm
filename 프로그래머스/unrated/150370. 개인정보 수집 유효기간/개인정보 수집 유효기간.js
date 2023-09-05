function solution(today, terms, privacies) {
    const [year, month, date] = today.split('.').map(Number);
    const objTerms = {}
    for (let i = 0; i < terms.length; i++) {
        const split = terms[i].split(' ');
        objTerms[split[0]] = Number(split[1]);
    }
    const result = [];
    const today_num = (year * 28 * 12) + (month * 28) + date;
    for (let i = 0; i < privacies.length; i++) {
        const [initYear, type] = privacies[i].split(' ');
        const plus_month = objTerms[type]; 
        const [year_p, month_p, date_p] = initYear.split('.').map(Number);
        const privacie_num = (year_p * 28 * 12) + (month_p * 28) + date_p + (plus_month * 28);
        if (today_num >= privacie_num) { result.push(i + 1)};
    }
    return result;
}

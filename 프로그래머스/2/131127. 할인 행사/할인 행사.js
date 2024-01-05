function solution(want, number, discount) {
    const itemCount = new Map();
    want.forEach((x, i) => {
        itemCount.set(x, number[i]);
    });

    let result = 0;

    for (let i = 0; i <= discount.length - 10; i++) {
        const discountList = new Map();

        for (let j = 0; j < 10; j++) {
            discountList.set(discount[j + i], (discountList.get(discount[j + i]) || 0) + 1);
        }

        if (want.every(x => itemCount.get(x) === discountList.get(x))) {
            result++;
        }
    }

    return result;
}

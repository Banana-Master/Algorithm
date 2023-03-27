const solution = (box, n) => {
    let result = 1
    for(let i = 0; i < box.length; i++) {
        result *= parseInt(box[i] / n)
    }
    return result
}
function solution(nums) {
    let newArr = Array.from(new Set(nums));
    return newArr.length <= (nums.length / 2) ? newArr.length : nums.length / 2;
}
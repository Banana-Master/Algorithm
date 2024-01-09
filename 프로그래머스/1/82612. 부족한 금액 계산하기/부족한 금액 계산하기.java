class Solution {
    public long solution(int price, int money, int count) {
        long result = 0;
        for(int i = 1; i <= count; i++) {
            result += price * i;
        }
        return result >= money ? result - money : 0;
    }
}
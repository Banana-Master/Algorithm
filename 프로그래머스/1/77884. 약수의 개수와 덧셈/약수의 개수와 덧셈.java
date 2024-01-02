class Solution {
    public int solution(int left, int right) {
        int result = 0;
        for(int i = left; i <= right; i++) {
            int count = 0;
            for(int j = 1; j <= i; j++) {
                if(i % j == 0) { count++; }
            }
            result += count % 2 == 0 ? i : -i;
        }
        return result;
    }
}
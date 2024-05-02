class Solution {
    public int solution(int n, int a, int b) {
        int result;
        
        for(result = 0; a != b; result++) {
            a = (a + 1) / 2;
            b = (b + 1) / 2;
        }
        
        return result;
    }
}
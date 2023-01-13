class Solution {
    public int solution(int n, int k) {
        int a = 12000;
        int b = 2000;
        if(n >= 10) {
            k -= n/10;
        }
        return (a * n) + (b * k);
    }
}
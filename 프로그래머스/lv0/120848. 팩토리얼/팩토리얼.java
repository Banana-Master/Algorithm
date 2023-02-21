class Solution {
    public int solution(int n) {
        int i = 1;
        int answer = 1;
        while(n > answer) {
            answer *= i;
            i++;
        }
        if(n==1) {
            i = i;
        } else if(n==answer) {
            i--;
        } else {
            i = i - 2;
        }
        
        
        return i;
    }
}
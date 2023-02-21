class Solution {
    public int[] solution(int n) {
        int a = n / 2;
        if(n % 2 == 1) {
            a++;
        }
        int[] array = new int[a];
        for(int i = 1, j = 0; i <= n; i+=2, j++) {
            array[j] = i;
        }
        return array;
    }
}
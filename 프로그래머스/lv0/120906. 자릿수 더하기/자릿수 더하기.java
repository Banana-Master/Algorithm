class Solution {
    public int solution(int n) {
        String str = Integer.toString(n);
        char[] ch = str.toCharArray();
        int sum = 0;
        for(int i = 0; i < ch.length; i++) {
            sum += ch[i] - '0';
        }
        return sum;
    }
}
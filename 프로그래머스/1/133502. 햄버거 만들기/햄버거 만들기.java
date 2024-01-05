class Solution {
    public int solution(int[] ingredient) {
        int answer = 0;
        StringBuilder stack = new StringBuilder();

        for (int i : ingredient) {
            stack.append(i);

            if (stack.length() >= 4 && stack.substring(stack.length() - 4).equals("1231")) {
                stack.delete(stack.length() - 4, stack.length());
                answer++;
            }
        }
        
        return answer;
    }
}
class Solution {
    public double solution(int[] numbers) {
        double sum = 0.0;
        double answer = 0.0;
        for(int i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
        answer = sum / numbers.length;
        System.out.println(answer);
        return answer;
    }
}
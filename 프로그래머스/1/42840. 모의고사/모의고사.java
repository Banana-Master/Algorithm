import java.util.Arrays;
import java.util.stream.IntStream;

class Solution {
    public int[] solution(int[] answers) {
        int[] mathHater1 = { 1, 2, 3, 4, 5 };
        int[] mathHater2 = { 2, 1, 2, 3, 2, 4, 2, 5 };
        int[] mathHater3 = { 3, 3, 1, 1, 2, 2, 4, 4, 5, 5 };

        int[] score = new int[3];

        for (int i = 0; i < answers.length; i++) {
            if (answers[i] == mathHater1[i % mathHater1.length]) {
                score[0]++;
            }
            if (answers[i] == mathHater2[i % mathHater2.length]) {
                score[1]++;
            }
            if (answers[i] == mathHater3[i % mathHater3.length]) {
                score[2]++;
            }
        }

        int max = Arrays.stream(score).max().getAsInt();

        return IntStream.range(0, score.length)
            .filter(i -> score[i] == max)
            .map(i -> i + 1)
            .toArray();
    }
}

import java.util.Arrays;

class Solution {
    public int solution(int n, int[] lost, int[] reserve) {
        int[] students = new int[n + 1];
        Arrays.fill(students, 1);

        for (int lostStudent : lost) {
            students[lostStudent]--;
        }

        for (int reserveStudent : reserve) {
            students[reserveStudent]++;
        }

        int cnt = 0;
        for (int i = 1; i <= n; i++) {
            if (students[i] == 0) {
                if (i - 1 >= 1 && students[i - 1] == 2) {
                    students[i - 1]--;
                    students[i]++;
                } else if (i + 1 <= n && students[i + 1] == 2) {
                    students[i + 1]--;
                    students[i]++;
                } else {
                    cnt++;
                }
            }
        }

        return n - cnt;
    }
}

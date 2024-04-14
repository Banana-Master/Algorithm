import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        try (BufferedReader br = new BufferedReader(new InputStreamReader(System.in))) {
            int k = Integer.parseInt(br.readLine());
            int[][] classes = new int[k][];
            for (int i = 0; i < classes.length; i++) {
                int[] input = Arrays.stream(br.readLine().split(" "))
                        .mapToInt(Integer::parseInt).toArray();
                int[] students = Arrays.copyOfRange(input, 1, input.length);
                students = Arrays.stream(students).sorted().toArray();
                classes[i] = students;
            }
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < classes.length; i++) {
                sb.append("Class " + (i + 1) + "\n");
                int max = classes[i][classes[i].length - 1];
                int min = classes[i][0];
                sb.append("Max " + max + ", ");
                sb.append("Min " + min + ", ");
                int largestGap = 0;
                for (int j = 1; j < classes[i].length; j++) {
                    if (largestGap < (classes[i][j]) - (classes[i][j - 1])) {
                        largestGap = (classes[i][j]) - (classes[i][j - 1]);
                    }
                }

                sb.append("Largest gap " + largestGap + "\n");
            }
            System.out.println(sb);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
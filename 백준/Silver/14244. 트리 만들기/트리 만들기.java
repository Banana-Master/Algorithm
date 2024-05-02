import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        try (BufferedReader br = new BufferedReader(new InputStreamReader(System.in))) {
            int[] inputs = Arrays.stream(br.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();
            int n = inputs[0];
            int m = inputs[1];
            
            for (int i = 0; i <= n -1; i++) {
                if(i < n - m) {
                    System.out.println(i + " " + (i + 1));
                } else {
                    System.out.println((n - m) + " " + (i + 1));
                }
            }
            
        } catch (Exception e) {
            e.printStackTrace();
        }

    }
}

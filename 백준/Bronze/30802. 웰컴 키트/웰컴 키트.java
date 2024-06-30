import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        try (BufferedReader br = new BufferedReader(new InputStreamReader(System.in))) {
            int n = Integer.parseInt(br.readLine());
            int[] sizes = Arrays.stream(br.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();
            int[] inputs = Arrays.stream(br.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();

            int t = inputs[0];
            int p = inputs[1];
            
            int result = 0;

            for(int i = 0; i < sizes.length; i++) {
                result += sizes[i] / t;
                if(sizes[i] % t != 0) {
                    result++;
                }
            }
            
            System.out.println(result);
            System.out.println(String.format("%d %d", n / p, n % p));

        } catch (Exception e) {
            e.printStackTrace();
        }

    }
}

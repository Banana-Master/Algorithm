import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class Main {
    public static void main(String[] args) {
        try (BufferedReader br = new BufferedReader(new InputStreamReader(System.in))) {
            long[] input = Arrays.stream(br.readLine().split(" ")).mapToLong(Long::parseLong).toArray();
            long N = input[0];
            long M = input[1];
            Set<Long> set = new HashSet<>();
            set.add(N);

            boolean flag = (N % 2 == 0) ? false : true;
            while (N > 1) {
                if (flag) {
                    N /= 2;
                    Long temp = N;
                    set.add(temp);
                    set.add(temp + 1);
                } else {
                    if (N % 2 == 0) {
                        N /= 2;
                        Long temp = N;
                        set.add(temp);
                    } else if (N % 2 == 1) {
                        flag = true;
                        N = (N - 1) / 2;
                        Long temp = N;
                        set.add(temp);
                        set.add(temp + 1);
                    }
                }
            }

            if (set.contains(M)) {
                System.out.println("YES");
            } else {
                System.out.println("NO");
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

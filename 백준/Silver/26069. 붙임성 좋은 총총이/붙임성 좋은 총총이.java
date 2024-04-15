import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Set;

public class Main {
    public static void main(String[] args) {
        try (BufferedReader br = new BufferedReader(new InputStreamReader(System.in))) {
            Set<String> set = new HashSet();
            set.add("ChongChong");
            int n = Integer.parseInt(br.readLine());
            for (int i = 0; i < n; i++) {
                String[] arr = br.readLine().split(" ");
                // arr에 set에 들어있는 값이 있다면 모든 arr값을 set add
                boolean existsInSet = false;
                for (String item : arr) {
                    if (set.contains(item)) {
                        existsInSet = true;
                        break;
                    }
                }
                if (existsInSet) {
                    set.addAll(Arrays.asList(arr));
                }
            }
            System.out.println(set.size());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
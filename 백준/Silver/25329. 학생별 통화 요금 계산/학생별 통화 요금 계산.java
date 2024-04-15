import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        try (BufferedReader br = new BufferedReader(new InputStreamReader(System.in))) {
            int n = Integer.parseInt(br.readLine());
            HashMap<String, Integer> map = new HashMap<>();
            for (int i = 0; i < n; i++) {
                String[] input = Arrays.stream(br.readLine().split(" ")).toArray(String[]::new);
                int[] timeArr = Arrays.stream(input[0].split(":")).mapToInt(Integer::parseInt).toArray();
                int time = (timeArr[0] * 60) + timeArr[1];
                int getTime = map.getOrDefault(input[1], 0);
                map.put(input[1], getTime + time);
            }
            for (HashMap.Entry<String, Integer> entrySet : map.entrySet()) {
                int resultTime = entrySet.getValue() - 100;
                int money = 10;
                if (resultTime > 0) {
                    if (resultTime % 50 != 0) {
                        money += 3;
                    }
                    money += (resultTime / 50) * 3;
                }
                map.put(entrySet.getKey(), money);
            }

            StringBuilder sb = new StringBuilder();

            map.entrySet().stream()
                    .sorted(HashMap.Entry.<String, Integer>comparingByValue()
                            .reversed()
                            .thenComparing(HashMap.Entry.comparingByKey()))
                    .forEach(entry -> {
                        sb.append(entry.getKey());
                        sb.append(" ");
                        sb.append(entry.getValue());
                        sb.append("\n");
                    });

            System.out.println(sb);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
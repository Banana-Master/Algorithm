import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;

public class Main {
    static boolean[] visited;
    static ArrayList<Integer>[] a;
    static boolean arrive;

    public static void main(String[] args) {
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(System.in))) {
            int[] input = Arrays.stream(reader.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();
            int n = input[0];
            int m = input[1];
            arrive = false;
            visited = new boolean[n];
            a = new ArrayList[n];
            for (int i = 0; i < n; i++) {
                a[i] = new ArrayList<>();
            }
            for (int i = 0; i < m; i++) {
                input = Arrays.stream(reader.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();
                a[input[0]].add(input[1]);
                a[input[1]].add(input[0]);
            }
            for (int i = 0; i < n; i++) {
                dfs(i, 1);
                if (arrive) {
                    break;
                }
            }
            if (arrive) {
                System.out.println("1");
            } else {
                System.out.println("0");
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void dfs(int now, int depth) {
        if (depth == 5 || arrive) {
            arrive = true;
            return;
        }
        visited[now] = true;
        for (int i : a[now]) {
            if (!visited[i]) {
                dfs(i, depth + 1);
            }
        }
        visited[now] = false;
    }
}

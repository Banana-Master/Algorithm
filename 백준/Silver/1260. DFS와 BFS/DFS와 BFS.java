import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;

public class Main {

    static int N;
    static boolean[] visitDFS;
    static boolean[] visitBFS;
    static int[][] arr;
    static String resultDFS = "";
    static String resultBFS = "";

    public static void main(String[] args) {
        try (BufferedReader bf = new BufferedReader(new InputStreamReader(System.in))) {

            String[] inputs = bf.readLine().split(" ");
            N = Integer.parseInt(inputs[0]);
            int M = Integer.parseInt(inputs[1]);
            int V = Integer.parseInt(inputs[2]);

            arr = new int[N + 1][N + 1];

            visitDFS = new boolean[N + 1];
            visitBFS = new boolean[N + 1];

            for (int i = 0; i < M; i++) {
                inputs = bf.readLine().split(" ");
                int x = Integer.parseInt(inputs[0]);
                int y = Integer.parseInt(inputs[1]);
                arr[x][y] = 1;
                arr[y][x] = 1;
            }

            dfs(V);
            bfs(V);

            System.out.println(resultDFS);
            System.out.println(resultBFS);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void dfs(int num) {
        visitDFS[num] = true;
        resultDFS += num + " ";
        for (int i = 1; i <= N; i++) {
            if (arr[num][i] == 1 && !visitDFS[i]) {
                dfs(i);
            }
        }
    }

    public static void bfs(int num) {
        Queue<Integer> queue = new LinkedList<>();
        queue.add(num);
        visitBFS[num] = true;
        resultBFS += num + " ";
        while (!queue.isEmpty()) {
            int idx = queue.poll();
            for (int i = 1; i <= N; i++) {
                if (arr[idx][i] == 1 && !visitBFS[i]) {
                    queue.add(i);
                    visitBFS[i] = true;
                    resultBFS += i + " ";
                }

            }
        }
    }
}

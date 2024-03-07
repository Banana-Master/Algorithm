import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Main {
    static boolean[] visited;
    static boolean[][] networkMap;
    static int result;

    public static void main(String[] args) {

        try (BufferedReader bf = new BufferedReader(new InputStreamReader(System.in))) {
            int computerCount = Integer.parseInt(bf.readLine());
            visited = new boolean[computerCount + 1];

            int network = Integer.parseInt(bf.readLine());

            networkMap = new boolean[computerCount + 1][computerCount + 1];

            for (int i = 0; i < network; i++) {
                String[] inputs = bf.readLine().split(" ");
                int num1 = Integer.parseInt(inputs[0]);
                int num2 = Integer.parseInt(inputs[1]);

                networkMap[num1][num2] = true;
                networkMap[num2][num1] = true;
            }

            DFS(1);

            System.out.println(result - 1);
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    static void DFS(int num) {
        visited[num] = true;
        result++;
        for (int i = 1; i < networkMap[num].length; i++) {
            if (networkMap[num][i] && !visited[i]) {
                DFS(i);
            }
        }
    }

}
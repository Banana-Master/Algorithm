import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.Queue;

public class Main {
	// 아래[0, 1], 오른쪽[1, 0], 위[0, -1], 왼쪽[-1, 0]으로 가라는 뜻
	static int[] dx = { 0, 1, 0, -1 };
	static int[] dy = { 1, 0, -1, 0 };
	static boolean[][] visited;
	static int[][] A;
	static int N, M;

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String[] inputs = br.readLine().split(" ");
		N = Integer.parseInt(inputs[0]);
		M = Integer.parseInt(inputs[1]);
		A = new int[N][M];
		visited = new boolean[N][M];
		for (int i = 0; i < N; i++) {
			inputs = br.readLine().split("");
			for (int j = 0; j < M; j++) {
				A[i][j] = Integer.parseInt(inputs[j]);
			}
		}

		BFS(0, 0);

		System.out.println(A[N - 1][M - 1]); // 최소경로

		// 결과 확인하기
		// for (int i = 0; i < N; i++) {
		// 	for (int j = 0; j < M; j++) {
		// 		System.out.print(A[i][j] + " ");
		// 	}
		// 	System.out.println();
		// }
	}

	private static void BFS(int i, int j) {
		Queue<int[]> queue = new LinkedList<>();
		queue.offer(new int[] { i, j });
		while (!queue.isEmpty()) {
			int now[] = queue.poll();
			visited[i][j] = true;
			for (int k = 0; k < 4; k++) {
				int x = now[0] + dx[k];
				int y = now[1] + dy[k];
				if (x >= 0 && y >= 0 && x < N && y < M) { // 배열을 넘어가면 안됨
					if (A[x][y] != 0 && !visited[x][y]) { // 0이여서 갈 수 없거나 이미 방문
						// 이제 갈 수 있는 곳
						visited[x][y] = true;
						A[x][y] = A[now[0]][now[1]] + 1;
						queue.add(new int[] { x, y });
					}
				}
			}
		}
	}
}

import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;

class Solution {
    
    public static HashMap<String, int[]> move = new HashMap<>();

	private static boolean isValidMove(int nx, int ny) {
		return 0 <= nx && nx < 11 && 0 <= ny && ny < 11;
	}
    
    public static int solution(String dirs) {
		move.put("U", new int[] { 0, 1 });
		move.put("D", new int[] { 0, -1 });
		move.put("R", new int[] { 1, 0 });
		move.put("L", new int[] { -1, 0 });
		final int[] x = { 5 };
		final int[] y = { 5 };
		HashSet<String> answer = new HashSet<>();

		Arrays.stream(dirs.split("")).forEach(dir -> {
			int[] values = move.get(dir);
			int nx = x[0] + values[0];
			int ny = y[0] + values[1];
			if (isValidMove(nx, ny)) {
				answer.add(x[0] + " " + y[0] + " " + nx + " " + ny);
				answer.add(nx + " " + ny + " " + x[0] + " " + y[0]);
				x[0] = nx;
				y[0] = ny;
			}
		});
		return answer.size() / 2;
	}
}
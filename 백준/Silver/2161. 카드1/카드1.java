import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Deque;
import java.util.LinkedList;

public class Main {
    public static void main(String[] args) {
        Deque<Integer> deque = new LinkedList<>();
        ArrayList<Integer> result = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new InputStreamReader(System.in))) {
            int n = Integer.parseInt(br.readLine());
            for (int i = 0; i < n; i++) {
                deque.offer(i + 1);
            }
            while (true) {
                int first = deque.poll();
                result.add(first);
                if (deque.isEmpty()) {
                    break;
                }
                int second = deque.poll();
                deque.add(second);
            }
            StringBuffer answer = new StringBuffer();
            for (Integer num : result) {
                answer.append(num + " ");
            }
            System.out.println(answer);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Deque;
import java.util.LinkedList;

public class Main {
    public static void main(String[] args) {
        try (BufferedReader br = new BufferedReader(new InputStreamReader(System.in))) {

            Deque<Integer> deque = new LinkedList<>();
            StringBuilder sb = new StringBuilder();
            int n = Integer.parseInt(br.readLine());

            for (int i = 0; i < n; i++) {
                int[] inputs = Arrays.stream(br.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();
                switch (inputs[0]) {
                    case 1:
                        deque.addFirst(inputs[1]);
                        break;
                    case 2:
                        deque.add(inputs[1]);
                        break;
                    case 3:
                        if(deque.isEmpty()) {
                            sb.append(-1 + "\n");
                        } else {
                            int num3 = deque.removeFirst();
                            sb.append(num3 + "\n");
                        }
                        break;
                    case 4:
                        if(deque.isEmpty()) {
                            sb.append(-1 + "\n");
                        } else {
                            int num4 = deque.removeLast();
                            sb.append(num4 + "\n");
                        }
                        break;
                    case 5:
                        sb.append(deque.size() + "\n");
                        break;
                    case 6:
                        sb.append(deque.isEmpty() ? 1 : 0);
                        sb.append("\n");
                        break;
                    case 7:
                        if (!deque.isEmpty()) {
                            sb.append(deque.getFirst() + "\n");
                        } else {
                            sb.append(-1 + "\n");
                        }
                        break;
                    case 8:
                        if (!deque.isEmpty()) {
                            sb.append(deque.getLast() + "\n");
                        } else {
                            sb.append(-1 + "\n");
                        }
                        break;
                    default:
                        System.out.println("잘못된 입력");
                }
            }
            System.out.println(sb);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

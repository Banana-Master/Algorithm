import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Set;

public class Main {
    public static void main(String[] args) {
        ArrayList<Integer> arr = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new InputStreamReader(System.in))) {
            int k = Integer.parseInt(br.readLine());
            for (int i = 0; i < k; i++) {
                int input = Integer.parseInt(br.readLine());
                if(input != 0) {
                    arr.add(input);
                } else {
                    arr.remove(arr.size() -1);
                }
            }
            System.out.println(arr.stream().reduce(0, (a, b) -> a + b));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
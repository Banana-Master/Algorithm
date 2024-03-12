import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Main {
    static boolean[] visited;
    static boolean[][] networkMap;
    static int result;

    public static void main(String[] args) {

        try (BufferedReader bf = new BufferedReader(new InputStreamReader(System.in))) {
            String[] inputs = bf.readLine().split(" ");
            int a = Integer.parseInt(inputs[0]);
            int k = Integer.parseInt(inputs[1]);

            int result = 0;

            while(a != k) {
                if(k % 2 == 0 && k / 2 >= a) {
                    k /= 2;
                } else {
                    k--;
                }
                result++;
            }

            System.out.println(result);
            
        } catch (Exception e) {
            e.printStackTrace();
        }

    }
}
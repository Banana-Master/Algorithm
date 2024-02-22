import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine());
        String result = "";
        for (int i = 0; i < t; i++) {
            String[] arr = br.readLine().split("");
            result += arr[0] + arr[arr.length -1] + "\n";
        }
        System.out.println(result);

    }
}

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) {
        try (BufferedReader br = new BufferedReader(new InputStreamReader(System.in))) {
           String input;
            while ((input = br.readLine()) != null) {
                System.out.println(input);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

    }
}

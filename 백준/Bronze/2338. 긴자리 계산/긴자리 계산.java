import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.math.BigInteger;

public class Main {
    public static void main(String[] args) {

        try (BufferedReader bf = new BufferedReader(new InputStreamReader(System.in))) {
            BigInteger a = new BigInteger(bf.readLine());
            BigInteger b = new BigInteger(bf.readLine());
            System.out.println(a.add(b));
            System.out.println(a.subtract(b));
            System.out.println(a.multiply(b));

        } catch (Exception e) {
            e.printStackTrace();
        }

    }
}
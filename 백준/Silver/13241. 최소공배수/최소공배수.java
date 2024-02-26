import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Main {

  static long gcd(long a, long b) {
    if(b == 0) {
      return a;
    }
    return gcd(b, a % b);
  }

  static long lcm(long a, long b) {
    return (a * b) / gcd(a, b);
  }

  public static void main(String[] args) {
    try(BufferedReader bf = new BufferedReader(new InputStreamReader(System.in))) {
      String[] inputs = bf.readLine().split(" ");
      long a = Long.parseLong(inputs[0]);
      long b = Long.parseLong(inputs[1]);
      long result = lcm(a, b);
      System.out.println(result);
    } catch (Exception e) {
      e.printStackTrace();
    }
  }
}

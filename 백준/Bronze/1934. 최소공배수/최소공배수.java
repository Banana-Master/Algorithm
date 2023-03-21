import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int testCases = scanner.nextInt();

        for (int i = 0; i < testCases; i++) {
            int a = scanner.nextInt();
            int b = scanner.nextInt();

            int gcd = calculateGcd(a, b);
            int lcm = calculateLcm(a, b, gcd);

            System.out.println(lcm);
        }
    }

    private static int calculateGcd(int a, int b) {
        int min = Math.min(a, b);
        for (int i = min; i >= 2; i--) {
            if (a % i == 0 && b % i == 0) {
                return i;
            }
        }
        return 1;
    }

    private static int calculateLcm(int a, int b, int gcd) {
        return (a * b) / gcd;
    }
}

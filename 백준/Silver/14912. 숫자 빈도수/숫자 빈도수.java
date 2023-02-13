import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int d = sc.nextInt();
        int count = 0;
        for (int j = 1; j <= n; j++) {
            String nums = Integer.toString(j);
            for (int i = 0; i < nums.length(); i++) {
                int x = nums.charAt(i) - '0';
                if (x == d) {
                    count++;
                }
            }
        }
        System.out.println(count);
    }
}

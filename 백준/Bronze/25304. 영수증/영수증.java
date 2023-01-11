import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int moneyAll = scanner.nextInt();
        int sum = 0;
        int a = 0, b = 0;
        int num = scanner.nextInt();
        for(int i = 0; i < num; i++) {
            a = scanner.nextInt();
            b = scanner.nextInt();
            sum += a * b;
        }
        if(moneyAll == sum) {
            System.out.println("Yes");
        } else {
            System.out.println("No");
        }

    }
}

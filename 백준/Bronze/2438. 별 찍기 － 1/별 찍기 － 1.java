import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int star = scanner.nextInt();
        for (int i = 0; i < star; i++) {
            for (int j = 0; j <= i; j++) {
                System.out.print("*");
                if (j == i) {
                    System.out.println();
                }
            }
        }
    }
}
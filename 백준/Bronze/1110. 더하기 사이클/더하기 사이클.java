import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int N = scanner.nextInt();
        int a = N;
        int count = 0;
        do {
            N = ((N % 10) * 10) + (((N / 10) + (N % 10)) % 10);
            count++;
        } while (a != N);
        System.out.println(count);
    }
}
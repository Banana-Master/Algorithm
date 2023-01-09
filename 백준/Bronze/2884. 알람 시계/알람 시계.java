
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int H = scanner.nextInt();
        int M = scanner.nextInt();

        if (M >= 45) {
            M = M - 45;
        } else {
            H = H - 1;
            M = M + 60 - 45;
            if (H < 0) {
                H = H + 24;
            }
        }
        System.out.print(H);
        System.out.print(" ");
        System.out.println(M);
    }
}
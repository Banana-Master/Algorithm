import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int N = scanner.nextInt();
        int count2 = 0;
        for (int i = 0; i < N; i++) {
            int input = scanner.nextInt();
            int count = 0;
            for (int j = 1; j <= input; j++) {
                if(input % j == 0) {
                    count++;
                }
            }
            if(count==2) {
                count2++;
            }
        }
        System.out.println(count2);
    }
}

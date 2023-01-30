
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int count = 0;
        for (int i = 0; i < 5; i++) {
            int b = sc.nextInt();

            if(a==b) {
                count++;
            }

        }
        System.out.println(count);
    }
}


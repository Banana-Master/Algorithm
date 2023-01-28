import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();

        for (int i = 0; i < num; i++) {
            int a = sc.nextInt();
            int b = sc.nextInt();
            int aa = 1;
            for (int j = 0; j < b; j++) {
                aa = (a * aa ) % 10;
            }
            if(aa==0) {
                aa = 10;
            }
            System.out.println(aa);
        }
    }
}


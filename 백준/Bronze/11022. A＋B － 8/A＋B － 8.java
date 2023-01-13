import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int num = scanner.nextInt();
        int[] a = new int[num];
        int[] b = new int[num];
        for(int i = 0; i < num; i++) {
            a[i] = scanner.nextInt();
            b[i] = scanner.nextInt();
        }
        for(int i = 0; i < num; i++) {
            System.out.println("Case #" + (i+1) +": " + a[i] + " + " +  b[i] +  " = " + (a[i]+b[i]));
        }
    }
}


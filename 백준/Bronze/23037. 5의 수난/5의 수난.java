import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.next();
        char[] ch = str.toCharArray();
        int[] arr = new int[ch.length];
        for (int i = 0; i < ch.length; i++) {
            arr[i] = ch[i] - '0';
        }
        int sum = 0;
        for (int i = 0; i < arr.length; i++) {
            sum += Math.pow(arr[i], 5);
        }
        System.out.println(sum);

    }
}

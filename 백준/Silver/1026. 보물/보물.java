import java.util.Arrays;
import java.util.Scanner;

public class Main  {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int[] array1 = new int[N];
        int[] array2 = new int[N];
        for (int i = 0; i < N; i++) {
            array1[i] = sc.nextInt();
        }
        for (int i = 0; i < N; i++) {
            array2[i] = sc.nextInt();
        }
        Arrays.sort(array1);
        Arrays.sort(array2);
        int answer = 0;
        for (int i = 0, j = N -1; i < N; i++, j--) {
            answer += array1[i] * array2[j];
        }
        System.out.println(answer);
    }
}
